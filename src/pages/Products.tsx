import { useState } from 'react';
import { X, Coffee, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Products = () => {
  const [selectedRoast, setSelectedRoast] = useState<string | null>(null);
  const [bulkInquiryOpen, setBulkInquiryOpen] = useState(false);
  const [bulkFormData, setBulkFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
  });

  const roasts = [
    {
      id: 'light',
      name: 'Light Roast',
      tagline: 'Bright and floral with citrus notes',
      description: 'Our light roast preserves the delicate, tea-like qualities that make Yirgacheffe famous. Expect bright acidity, floral aromatics, and citrus undertones with a clean, crisp finish.',
      images: [
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop',
      ],
      mainImage: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      notes: ['Lemon zest', 'Jasmine flowers', 'Green tea', 'Honey sweetness'],
    },
    {
      id: 'medium',
      name: 'Medium Roast',
      tagline: 'Balanced sweetness with chocolate undertones',
      description: 'The perfect middle ground that highlights both origin character and roast development. Rich body with balanced acidity, featuring chocolate and caramel notes alongside the signature Yirgacheffe brightness.',
      images: [
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      ],
      mainImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop',
      notes: ['Dark chocolate', 'Caramel', 'Orange peel', 'Balanced acidity'],
    },
    {
      id: 'dark',
      name: 'Dark Roast',
      tagline: 'Bold and rich with smoky complexity',
      description: 'Deep, rich flavors with a full body and low acidity. Our dark roast maintains the Ethiopian character while developing bold, smoky notes perfect for espresso and those who prefer stronger coffee profiles.',
      images: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop',
      ],
      mainImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop',
      notes: ['Dark chocolate', 'Toasted nuts', 'Smoky finish', 'Full body'],
    },
  ];

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bulk inquiry submitted:', bulkFormData);
    setBulkInquiryOpen(false);
    // Handle form submission here
  };

  const handleBulkInputChange = (field: string, value: string) => {
    setBulkFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16"> {/* Account for fixed navigation */}
      {/* Hero Banner */}
      <section className="relative h-80 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=800&fit=crop"
            alt="Premium ORA Coffee beans spilling from bag with coffee cup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Our Roasts
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Three distinctive profiles of Ethiopian Yirgacheffe excellence
            </p>
          </div>
        </div>
      </section>

      {/* Roast Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roasts.map((roast) => (
              <div key={roast.id} className="bg-card rounded-lg shadow-card-hover overflow-hidden card-hover">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={roast.mainImage}
                    alt={`${roast.name} coffee beans and brewing setup`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    {roast.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {roast.tagline}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {roast.notes.slice(0, 2).map((note, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => setSelectedRoast(roast.id)}
                    variant="outline"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Inquiry CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent/20 rounded-full">
              <Package className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Need Bulk Pricing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get custom quotes for wholesale orders, private labeling, and volume discounts tailored to your business needs.
          </p>
          <Button
            onClick={() => setBulkInquiryOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium"
          >
            Request Bulk Quote
          </Button>
        </div>
      </section>

      {/* Roast Detail Modal */}
      <Dialog open={!!selectedRoast} onOpenChange={() => setSelectedRoast(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRoast && (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-3xl">
                  {roasts.find(r => r.id === selectedRoast)?.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {roasts.find(r => r.id === selectedRoast)?.images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${roasts.find(r => r.id === selectedRoast)?.name} coffee preparation ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {roasts.find(r => r.id === selectedRoast)?.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Tasting Notes</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {roasts.find(r => r.id === selectedRoast)?.notes.map((note, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Coffee size={16} className="text-accent" />
                          <span className="text-sm">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Request Sample
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Bulk Inquiry Modal */}
      <Dialog open={bulkInquiryOpen} onOpenChange={setBulkInquiryOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">
              Request Bulk Quote
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleBulkSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={bulkFormData.name}
                onChange={(e) => handleBulkInputChange('name', e.target.value)}
                className="form-field"
                required
              />
              <Input
                placeholder="Company Name"
                value={bulkFormData.company}
                onChange={(e) => handleBulkInputChange('company', e.target.value)}
                className="form-field"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={bulkFormData.email}
                onChange={(e) => handleBulkInputChange('email', e.target.value)}
                className="form-field"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={bulkFormData.phone}
                onChange={(e) => handleBulkInputChange('phone', e.target.value)}
                className="form-field"
              />
            </div>
            <Input
              placeholder="Estimated Monthly Quantity (lbs)"
              value={bulkFormData.quantity}
              onChange={(e) => handleBulkInputChange('quantity', e.target.value)}
              className="form-field"
            />
            <Textarea
              placeholder="Tell us about your bulk needs, preferred roasts, packaging requirements..."
              value={bulkFormData.message}
              onChange={(e) => handleBulkInputChange('message', e.target.value)}
              className="form-field"
              rows={4}
            />
            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setBulkInquiryOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;