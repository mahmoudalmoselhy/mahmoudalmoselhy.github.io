import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';
import { Image } from 'https://deno.land/x/imagescript@1.3.0/mod.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get the authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (authError || !user) {
      throw new Error('Unauthorized');
    }

    console.log('Processing image optimization request for user:', user.id);

    // Parse the form data
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      throw new Error('No file provided');
    }

    console.log('File received:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, and WebP are supported.');
    }

    // Read the file as array buffer
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    console.log('Decoding image...');
    // Decode the image
    const image = await Image.decode(uint8Array);
    
    console.log('Image decoded:', image.width, 'x', image.height);

    // Convert to WebP with quality 85
    console.log('Converting to WebP...');
    const webpBuffer = await image.encodeWebP(85);

    console.log('Original size:', file.size, 'Optimized size:', webpBuffer.length);

    // Generate file paths
    const timestamp = Date.now();
    const fileExt = file.name.split('.').pop();
    const fileName = file.name.replace(`.${fileExt}`, '');
    const originalPath = `${user.id}/${fileName}_${timestamp}.${fileExt}`;
    const optimizedPath = `${user.id}/${fileName}_${timestamp}.webp`;

    console.log('Uploading original image to:', originalPath);
    // Upload original image
    const { error: originalError } = await supabase.storage
      .from('original-images')
      .upload(originalPath, uint8Array, {
        contentType: file.type,
        upsert: false,
      });

    if (originalError) {
      console.error('Error uploading original:', originalError);
      throw new Error(`Failed to upload original image: ${originalError.message}`);
    }

    console.log('Uploading optimized image to:', optimizedPath);
    // Upload optimized WebP image
    const { error: optimizedError } = await supabase.storage
      .from('optimized-images')
      .upload(optimizedPath, webpBuffer, {
        contentType: 'image/webp',
        upsert: false,
      });

    if (optimizedError) {
      console.error('Error uploading optimized:', optimizedError);
      throw new Error(`Failed to upload optimized image: ${optimizedError.message}`);
    }

    // Get public URLs
    const { data: originalUrl } = supabase.storage
      .from('original-images')
      .getPublicUrl(originalPath);

    const { data: optimizedUrl } = supabase.storage
      .from('optimized-images')
      .getPublicUrl(optimizedPath);

    const compressionRatio = ((1 - webpBuffer.length / file.size) * 100).toFixed(1);

    console.log('Upload successful! Compression ratio:', compressionRatio + '%');

    return new Response(
      JSON.stringify({
        success: true,
        originalUrl: originalUrl.publicUrl,
        optimizedUrl: optimizedUrl.publicUrl,
        originalSize: file.size,
        optimizedSize: webpBuffer.length,
        compressionRatio: `${compressionRatio}%`,
        message: 'Image optimized successfully',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in optimize-image function:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
