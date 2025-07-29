import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Contact form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting ORA Coffee. We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="pt-16"> {/* Account for fixed navigation */}
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Talk Wholesale with ORA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to partner with us? Let's discuss how ORA Coffee can elevate your business with premium Ethiopian Yirgacheffe.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Left 60% */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`form-field ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="form-field"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`form-field ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="form-field"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us about your wholesale needs, volume requirements, or any questions you have... *"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`form-field ${errors.message ? 'border-destructive' : ''}`}
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information - Right 40% */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                      <p className="text-muted-foreground">669-213-9677</p>
                      <p className="text-muted-foreground">408-332-6580</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <p className="text-muted-foreground">Zenbilley@gmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">
                        Addis Ababa, Ethiopia → U.S. Import Hub
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM PST
                      </p>
                      <p className="text-muted-foreground">
                        Saturday: 9:00 AM - 3:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Quick Response Promise
                </h4>
                <p className="text-muted-foreground text-sm">
                  We respond to all wholesale inquiries within 24 hours. For urgent requests, 
                  please call us directly at 669-213-9677.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Warehouse Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Our Distribution Network
            </h2>
            <p className="text-lg text-muted-foreground">
              Our U.S. warehouse ships nationwide Monday–Friday with expedited delivery options
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4......"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ORA Coffee U.S. Distribution Center"
              className="hover:filter-none transition-all duration-500"
            ></iframe>
            <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
              <div className="text-center text-primary">
                <MapPin size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Click to explore our distribution network</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-background px-6 py-3 rounded-lg shadow-card-hover">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-foreground font-medium">
                Free shipping on orders over $500 | Expedited options available
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;