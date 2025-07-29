import { useState } from 'react';
import { Coffee, Handshake, Truck } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    roast: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16"> {/* Account for fixed navigation */}
      {/* Hero Section */}
      <HeroCarousel />

      {/* Lead Capture Strip */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form Section - Left 60% */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Ready to Partner with ORA?
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="form-field"
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="form-field"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="form-field"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-field"
                    />
                  </div>
                  <Select onValueChange={(value) => handleInputChange('roast', value)}>
                    <SelectTrigger className="form-field">
                      <SelectValue placeholder="Roast Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light Roast</SelectItem>
                      <SelectItem value="medium">Medium Roast</SelectItem>
                      <SelectItem value="dark">Dark Roast</SelectItem>
                      <SelectItem value="all">All Roasts</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="How can we help? Tell us about your business needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-field"
                    rows={4}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-medium"
                  >
                    Get Started
                  </Button>
                </form>
              </div>
            </div>

            {/* Features Section - Right 40% */}
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Why Choose ORA?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Coffee className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dedicated Reps</h4>
                    <p className="text-sm text-muted-foreground">
                      Personal account managers who understand your business
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Fast Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Nationwide delivery within 2-3 business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Handshake className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Custom Labeling</h4>
                    <p className="text-sm text-muted-foreground">
                      Private label solutions for your brand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ORA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              The ORA Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the excellence that makes ORA Coffee the preferred choice for wholesale partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sourced Responsibly */}
            <div className="group card-hover cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
                  alt="Ethiopian coffee farm with farmers working in highland plantation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent group-hover:from-primary/40 transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Sourced Responsibly
              </h3>
              <p className="text-muted-foreground">
                Direct relationships with Ethiopian farmers ensure fair trade and exceptional quality from farm to cup.
              </p>
            </div>

            {/* Artisan Roast */}
            <div className="group card-hover cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
                  alt="Professional coffee roasting facility with artisan roaster at work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent group-hover:from-primary/40 transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Artisan Roast
              </h3>
              <p className="text-muted-foreground">
                Small-batch roasting techniques perfected over generations deliver consistent, premium flavor profiles.
              </p>
            </div>

            {/* Trusted Partner */}
            <div className="group card-hover cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop"
                  alt="Business partners shaking hands in modern coffee shop setting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent group-hover:from-primary/40 transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Trusted Partner
              </h3>
              <p className="text-muted-foreground">
                Reliable supply chains and dedicated support help your business thrive with premium coffee solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;