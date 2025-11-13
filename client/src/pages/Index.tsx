import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, DollarSign, Building2, Star, Key } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { useFeaturedProperties } from '@/hooks/useProperties';
import { PropertyFilters } from '@/types/property';
import heroImage from '@/assets/hero-home.jpg';
import LoadingSpinner from '@/components/LoadingSpinner';
import PWAInstallPrompt from '@/components/PWAInstallPrompt'; 
import { useNewsletterPopup } from '@/hooks/useNewsletterPopup';
import NewsletterPopup from '@/components/NewsletterPopup';

const Index = (): JSX.Element => {
  const { featuredProperties, loading, error } = useFeaturedProperties();
  const { showPopup, setShowPopup } = useNewsletterPopup();
  
  const handleSearch = (filters: PropertyFilters): void => {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value.toString());
    });
    
    window.location.href = `/buy?${queryParams.toString()}`;
  };

  const scrollToProperties = (e: React.MouseEvent) => {
    e.preventDefault();
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Updated Hero Section */}
        <section 
          className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Content */}
          <div className="relative z-10 px-4 max-w-4xl mx-auto">
            {/* Main Heading with Fade-in Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white animate-fade-in">
              Crestlineproperties
            </h1>
            
            {/* Subheading with Fade-in Animation */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in animation-delay-200">
              Get the Real Deal. Your Trusted Partner in Kenyan Real Estate.
            </p>
            
            {/* Call-to-Action Button */}
            <a 
              href="#properties"
              onClick={scrollToProperties}
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-400"
            >
              Explore Our Properties
            </a>
          </div>
        </section>

        {/* Featured Listings - Added ID for smooth scrolling */}
        <section id="properties" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Featured Properties</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Handpicked luxury properties that define elegance and comfort
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive mb-4">Failed to load featured properties</p>
                <Button onClick={() => window.location.reload()}>
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                  {featuredProperties && featuredProperties.length > 0 ? (
                    featuredProperties.map((property) => (
                      <div key={property.id} className="flex">
                        <PropertyCard 
                          property={property} 
                          className="h-full flex flex-col"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <p className="text-muted-foreground text-lg">
                        No featured properties available at the moment.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Check back soon for new listings!
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/buy">
                      View All Properties <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Rest of your existing code remains the same */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/buy">
                <div className="group bg-card p-8 rounded-lg shadow-md hover:shadow-elegant transition-smooth text-center cursor-pointer">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-base">
                    <HomeIcon className="h-8 w-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Buy a House</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore thousands of properties ready for you
                  </p>
                  <span className="text-teal font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-base">
                    Browse Listings <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              {/* Other CTA cards remain the same */}
              <Link to="/sell">
                <div className="group bg-card p-8 rounded-lg shadow-md hover:shadow-elegant transition-smooth text-center cursor-pointer">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-base">
                    <DollarSign className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sell a House</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the best price for your property
                  </p>
                  <span className="text-accent font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-base">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <Link to="/rent">
                <div className="group bg-card p-8 rounded-lg shadow-md hover:shadow-elegant transition-smooth text-center cursor-pointer">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-base">
                    <Key className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rent Property</h3>
                  <p className="text-muted-foreground mb-4">
                    Find your perfect rental home today
                  </p>
                  <span className="text-primary font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-base">
                    Browse Rentals <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <Link to="/manage">
                <div className="group bg-card p-8 rounded-lg shadow-md hover:shadow-elegant transition-smooth text-center cursor-pointer">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-base">
                    <Building2 className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Manage Property</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional property management services
                  </p>
                  <span className="text-gold font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-base">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {/* Newsletter Popup */}
      {showPopup && (
        <NewsletterPopup onClose={() => setShowPopup(false)} />
      )}

      {/* PWA Install Prompt Popup */}
      <PWAInstallPrompt />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+254743012966?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default Index;