import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface OptimizationResult {
  originalUrl: string;
  optimizedUrl: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: string;
}

export const ImageOptimizer = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a JPEG, PNG, or WebP image.',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    setResult(null);

    try {
      // Get the current session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('You must be logged in to upload images');
      }

      // Create form data
      const formData = new FormData();
      formData.append('file', file);

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('optimize-image', {
        body: formData,
      });

      if (error) throw error;

      if (data.success) {
        setResult(data);
        toast({
          title: 'Image optimized successfully!',
          description: `Saved ${data.compressionRatio} in file size`,
        });
      } else {
        throw new Error(data.error || 'Optimization failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error instanceof Error ? error.message : 'Failed to optimize image',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      // Reset the input
      event.target.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl border border-border bg-card">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Image Optimizer</h3>
        <p className="text-muted-foreground">
          Upload images to automatically convert them to WebP format and reduce file size
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="image-upload"
            className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
              isUploading
                ? 'border-primary/50 bg-primary/5'
                : 'border-border hover:border-primary hover:bg-accent'
            }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {isUploading ? (
                <>
                  <Loader2 className="w-12 h-12 mb-3 text-primary animate-spin" />
                  <p className="text-sm text-foreground font-medium">Optimizing image...</p>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-foreground font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, or WebP (MAX. 10MB)</p>
                </>
              )}
            </div>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </label>
        </div>

        {result && (
          <div className="space-y-4 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">Optimization Complete!</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Original</h4>
                <p className="text-xs text-muted-foreground">Size: {formatFileSize(result.originalSize)}</p>
                <img
                  src={result.originalUrl}
                  alt="Original"
                  className="w-full rounded-lg border border-border"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(result.originalUrl, '_blank')}
                >
                  View Original
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Optimized (WebP)</h4>
                <p className="text-xs text-muted-foreground">
                  Size: {formatFileSize(result.optimizedSize)} ({result.compressionRatio} saved)
                </p>
                <img
                  src={result.optimizedUrl}
                  alt="Optimized"
                  className="w-full rounded-lg border border-border"
                />
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(result.optimizedUrl, '_blank')}
                >
                  View Optimized
                </Button>
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                💡 Use the optimized URL in your website for faster loading times
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Note:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Images are automatically compressed and converted to WebP format</li>
              <li>Both original and optimized versions are stored securely</li>
              <li>You must be logged in to upload images</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
