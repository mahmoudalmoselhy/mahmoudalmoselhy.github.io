-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON public.contact_submissions;

-- Create new restrictive SELECT policy - only owner email can view
CREATE POLICY "Only owner can view submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.jwt() ->> 'email' = 'mahmoudalmoselhy@gmail.com');

-- Create new restrictive DELETE policy - only owner email can delete
CREATE POLICY "Only owner can delete submissions" 
ON public.contact_submissions 
FOR DELETE 
USING (auth.jwt() ->> 'email' = 'mahmoudalmoselhy@gmail.com');