-- Create storage buckets for images
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('original-images', 'original-images', false),
  ('optimized-images', 'optimized-images', true);

-- RLS policies for original-images bucket (private)
CREATE POLICY "Users can upload their own images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'original-images' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can view their own images"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'original-images' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- RLS policies for optimized-images bucket (public read, authenticated write)
CREATE POLICY "Anyone can view optimized images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'optimized-images');

CREATE POLICY "Authenticated users can upload optimized images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'optimized-images' AND
  auth.role() = 'authenticated'
);