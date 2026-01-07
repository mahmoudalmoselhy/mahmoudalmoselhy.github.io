-- Add policy for authenticated users to delete submissions
CREATE POLICY "Authenticated users can delete submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (true);