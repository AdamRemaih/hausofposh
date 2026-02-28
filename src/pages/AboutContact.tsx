import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  eventDate: z.date({ required_error: "Event date is required" }),
  eventLocation: z.string().trim().min(1, "Event location is required").max(200),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  description: z.string().trim().min(10, "Please provide at least 10 characters").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const AboutContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "",
      firstName: "",
      lastName: "",
      eventLocation: "",
      phone: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Formspree integration — replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          eventDate: format(data.eventDate, "PPP"),
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        form.reset();
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* About */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-80 bg-background rounded-lg flex items-center justify-center shrink-0 shadow-sm"
            >
              <span className="text-muted-foreground text-sm italic">Co-founder photo</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Haus of Posh</h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Haus of Posh was founded with a passion for creating unforgettable experiences through elegant event decoration. 
                We believe every celebration deserves to be extraordinary — from the grandest wedding to the most intimate gathering. 
                Our team brings creativity, attention to detail, and a touch of luxury to every event we design. 
                With a curated collection of premium decor and a commitment to excellence, we transform spaces into breathtaking settings 
                that leave lasting impressions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              Ready to start planning? Fill out the form below and we'll be in touch.
            </p>
          </motion.div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Inquiry Type */}
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inquiry Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="booking">Booking</SelectItem>
                        <SelectItem value="rentals">Rentals</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" className="rounded-lg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" className="rounded-lg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Event Date */}
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Event Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-lg",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Event Location */}
              <FormField
                control={form.control}
                name="eventLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Venue or city" className="rounded-lg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" type="tel" className="rounded-lg" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@email.com" type="email" className="rounded-lg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your event vision, theme, guest count, and any special requests..."
                        className="min-h-[120px] rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full font-sans tracking-wide text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
