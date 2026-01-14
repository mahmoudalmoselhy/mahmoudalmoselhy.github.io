
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, MessageCircle, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  phone: z.string().trim().min(8, { message: "Please enter a valid phone number" }).max(20),
  countryCode: z.string().trim().min(1, { message: "Required" }).max(5),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      countryCode: '+20',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const fullPhone = `${data.countryCode} ${data.phone}`;
      
      // Save to database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          phone: fullPhone,
          message: data.message,
        });

      if (error) throw error;

      // Send email notifications (non-blocking)
      supabase.functions.invoke('send-contact-notification', {
        body: {
          name: data.name,
          email: data.email,
          phone: fullPhone,
          message: data.message,
        },
      }).catch(console.error);

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
          Let's <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Ready to create powerful content that drives results? Let's discuss your next project.
        </p>
      </div>
      
      <section id="contact" className="md:bg-card md:rounded-3xl md:border md:border-border md:p-12">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-12 transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 hover:bg-gradient-to-br hover:from-secondary hover:to-primary/4">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8">Send a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="bg-muted/30 border-border focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your@email.com" 
                                {...field} 
                                className="bg-muted/30 border-border focus:border-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex gap-3">
                        <FormField
                          control={form.control}
                          name="countryCode"
                          render={({ field }) => (
                            <FormItem className="w-24">
                              <FormLabel className="text-foreground">Code</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+20" 
                                  {...field} 
                                  className="bg-muted/30 border-border focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="text-foreground">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="1001234567" 
                                  {...field} 
                                  className="bg-muted/30 border-border focus:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project..." 
                                rows={4}
                                {...field} 
                                className="bg-muted/30 border-border focus:border-primary resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full"
                        size="lg"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
                
                {/* Contact Info */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8">Get In Touch</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-red-500/50 cursor-pointer">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs md:text-sm">Email</p>
                        <a href="mailto:mahmoudalmoselhy@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm md:text-base break-all">
                          mahmoudalmoselhy@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs md:text-sm">Phone</p>
                        <a href="tel:+201001321331" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
                          +20 100 132 1331
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs md:text-sm">WhatsApp</p>
                        <a 
                          href="https://wa.me/201001321331/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                        >
                          <span>+20 100 132 1331</span>
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-600/50 cursor-pointer">
                        <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs md:text-sm">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/mahmoudalmoselhy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                        >
                          <span className="break-all">mahmoudalmoselhy</span>
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* What I Offer section */}
                  <div className="bg-muted/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border mt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">What I Offer</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Content Strategy & Planning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>SEO Optimization & Analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Team Leadership & Training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Content Creation & Copywriting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-muted-foreground text-sm md:text-base">
              © 2024 Mahmoud AlMoselhy. Crafted with passion for great content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
