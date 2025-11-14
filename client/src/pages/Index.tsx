import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, DollarSign, Building2, Star, Key, Pause, Play } from 'lucide-react';
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
import { useState, useEffect, useRef } from 'react';

const Index = (): JSX.Element => {
  const { featuredProperties, loading, error } = useFeaturedProperties();
  const { showPopup, setShowPopup } = useNewsletterPopup();
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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

  // Auto-scroll animation
  useEffect(() => {
    if (!scrollContainerRef.current || !isPlaying) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;
    let direction = 1; // 1 for right to left, -1 for left to right

    const scroll = () => {
      if (!isPlaying) return;

      scrollPosition += direction * 1.0; // Adjust speed here

      // Reverse direction when reaching edges
      if (scrollPosition >= scrollWidth - clientWidth) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // CTA cards data for the carousel
  const ctaCards = [
    {
      to: "/buy",
      icon: HomeIcon,
      iconColor: "text-teal",
      bgColor: "bg-teal/10",
      hoverBgColor: "group-hover:bg-teal/20",
      title: "Buy a House",
      description: "Explore thousands of properties ready for you",
      linkText: "Browse Listings",
      textColor: "text-teal"
    },
    {
      to: "/sell",
      icon: DollarSign,
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      hoverBgColor: "group-hover:bg-accent/20",
      title: "Sell a House",
      description: "Get the best price for your property",
      linkText: "Get Started",
      textColor: "text-accent"
    },
    {
      to: "/rent",
      icon: Key,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      hoverBgColor: "group-hover:bg-primary/20",
      title: "Rent Property",
      description: "Find your perfect rental home today",
      linkText: "Browse Rentals",
      textColor: "text-primary"
    },
    {
      to: "/manage",
      icon: Building2,
      iconColor: "text-gold",
      bgColor: "bg-gold/10",
      hoverBgColor: "group-hover:bg-gold/20",
      title: "Manage Property",
      description: "Professional property management services",
      linkText: "Learn More",
      textColor: "text-gold"
    },
    // Duplicate cards for seamless looping
    {
      to: "/buy",
      icon: HomeIcon,
      iconColor: "text-teal",
      bgColor: "bg-teal/10",
      hoverBgColor: "group-hover:bg-teal/20",
      title: "Buy a House",
      description: "Explore thousands of properties ready for you",
      linkText: "Browse Listings",
      textColor: "text-teal"
    },
    {
      to: "/sell",
      icon: DollarSign,
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      hoverBgColor: "group-hover:bg-accent/20",
      title: "Sell a House",
      description: "Get the best price for your property",
      linkText: "Get Started",
      textColor: "text-accent"
    },
    {
      to: "/rent",
      icon: Key,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      hoverBgColor: "group-hover:bg-primary/20",
      title: "Rent Property",
      description: "Find your perfect rental home today",
      linkText: "Browse Rentals",
      textColor: "text-primary"
    },
    {
      to: "/manage",
      icon: Building2,
      iconColor: "text-gold",
      bgColor: "bg-gold/10",
      hoverBgColor: "group-hover:bg-gold/20",
      title: "Manage Property",
      description: "Professional property management services",
      linkText: "Learn More",
      textColor: "text-gold"
    }
  ];

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

        {/* Animated CTA Carousel Section */}
        <section className="py-16 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-2">Our Services</h2>
                <p className="text-muted-foreground text-lg">
                  Discover how we can help you with your real estate needs
                </p>
              </div>
              
              {/* Play/Pause Control */}
              <button
                onClick={togglePlayPause}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 group"
                aria-label={isPlaying ? "Pause animation" : "Play animation"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-5 w-5 text-gray-700 group-hover:text-gray-900" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 text-gray-700 group-hover:text-gray-900" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Play</span>
                  </>
                )}
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-hidden scrollbar-hide"
                style={{ scrollBehavior: 'auto' }}
              >
                {ctaCards.map((card, index) => (
                  <Link 
                    key={index} 
                    to={card.to}
                    className="flex-shrink-0 w-[280px] md:w-[320px] group bg-card p-6 md:p-8 rounded-lg shadow-md hover:shadow-elegant transition-smooth text-center cursor-pointer"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${card.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${card.hoverBgColor} transition-base`}>
                      <card.icon className={`h-7 w-7 md:h-8 md:w-8 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                      {card.description}
                    </p>
                    <span className={`${card.textColor} font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-base text-sm md:text-base`}>
                      {card.linkText} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
            </div>

            {/* Mobile indicator dots */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {[0, 1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    dot === 0 ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
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