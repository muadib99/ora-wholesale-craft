import { Award, Globe, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Zenbilley Wondimu',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head Roaster',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1e2?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Marcus Chen',
      role: 'Logistics Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Tadesse Bekele',
      role: 'Farm Partner',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const farmImages = [
    {
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop',
      alt: 'Yirgacheffe highland coffee farm with traditional farming methods',
    },
    {
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      alt: 'Modern coffee roasting facility with professional equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      alt: 'Coffee packaging and quality control process',
    },
  ];

  return (
    <div className="pt-16"> {/* Account for fixed navigation */}
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            From the highlands of Ethiopia to your business, crafting exceptional coffee experiences since 2018
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                Born from Passion, Grown with Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ORA Coffee began with a simple dream: to share the extraordinary flavors of Ethiopian Yirgacheffe coffee with businesses across America. Founded by Zenbilley Wondimu, who grew up among the coffee farms of Ethiopia, our company bridges continents to deliver authentic, premium coffee experiences.
                </p>
                <p>
                  What started as a personal mission to honor his heritage has grown into a trusted wholesale partnership, serving cafés, restaurants, and businesses nationwide. We believe that great coffee tells a story – from the hands that harvest it to the cups that serve it.
                </p>
                <p>
                  Every bag of ORA Coffee carries with it the wisdom of generations, the richness of Ethiopian soil, and the passion of artisan roasting. We're not just importing coffee; we're sharing a culture, supporting farmers, and building lasting relationships with our wholesale partners.
                </p>
                <p>
                  Today, ORA Coffee stands as a testament to the power of authentic partnerships – connecting Ethiopian farmers with American businesses, tradition with innovation, and passion with purpose.
                </p>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="space-y-4">
              {farmImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg shadow-elegant"
                  style={{ height: index === 1 ? '200px' : '150px' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision, every partnership, and every cup we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Direct Trade */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Direct Trade
              </h3>
              <p className="text-muted-foreground">
                We work directly with Ethiopian farmers, ensuring fair compensation and sustainable practices that benefit entire communities.
              </p>
            </div>

            {/* Quality Control */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Quality Control
              </h3>
              <p className="text-muted-foreground">
                From bean selection to final packaging, every step is meticulously monitored to deliver consistent, exceptional quality.
              </p>
            </div>

            {/* B2B Support */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                B2B Support
              </h3>
              <p className="text-muted-foreground">
                Dedicated account management, flexible ordering, and custom solutions designed to help your business succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Process Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind every exceptional cup of ORA Coffee
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-end justify-center pb-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <h3 className="font-playfair text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;