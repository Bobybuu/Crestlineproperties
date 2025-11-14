import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Users, Shield, Clock, Home, Target, Award, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Sell = () => {
  const steps = [
    {
      number: '01',
      title: 'Property Valuation',
      description: 'Get a free, accurate valuation of your property from our expert team.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Professional Marketing',
      description: 'We create stunning listings with professional photography and targeted marketing.',
      icon: Award,
    },
    {
      number: '03',
      title: 'Qualified Buyers',
      description: 'Connect with pre-qualified buyers ready to make competitive offers.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Smooth Closing',
      description: 'Our team handles all paperwork and negotiations for a hassle-free closing.',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Maximum Value',
      description: 'Strategic pricing and marketing to get you the best possible price.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Fast Sales',
      description: 'Average sale time of 30 days with our proven marketing strategies.',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: 'Work with experienced agents who know your market inside out.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Full legal protection and transparent transaction management.',
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <Header />

      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sell Your Property with 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Confidence</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Get the best price for your property with our expert team and proven selling process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-[#037bfc] hover:bg-[#0369dc] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <a href="#valuation" className="flex items-center gap-2">
                    Get Free Valuation 
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300"
                  size="lg"
                >
                  <Link to="/dashboard/seller" className="flex items-center gap-2">
                    Seller Dashboard
                    <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="h-4 w-4" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                Why Sell With Crestline?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experience the difference with our comprehensive selling services designed to maximize your profit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50/50 relative">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
                <Clock className="h-4 w-4" />
                Simple & Transparent
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                Our 4-Step Selling Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A streamlined approach from listing to closing, designed for your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200"></div>
              
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center h-full border border-blue-50">
                    {/* Step Number with Gradient */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#037bfc] to-[#03c3fc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    
                    {/* Step Icon */}
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-[#037bfc]" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className="bg-white p-2 rounded-full shadow-lg border border-blue-100">
                        <ArrowRight className="h-6 w-6 text-[#037bfc]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Valuation Form Section */}
        <section id="valuation" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Home className="h-4 w-4" />
                  Free Valuation
                </div>
                <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                  Get Your Free Property Valuation
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Provide us with some basic information and receive an instant market estimate
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                <div className="p-1 bg-gradient-to-r from-[#037bfc] to-[#03c3fc]"></div>
                <CardContent className="p-8 md:p-12">
                  <ContactForm formType="valuation" />
                </CardContent>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center gap-3">
                  <CheckCircle className="h-7 w-7 text-[#037bfc]" />
                  What happens after you submit?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white transition-colors duration-200">
                    <CheckCircle className="h-6 w-6 text-[#037bfc] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800">Instant Online Estimate</span>
                      <p className="text-muted-foreground mt-1">
                        Receive an immediate valuation based on current market data and comparable properties
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white transition-colors duration-200">
                    <CheckCircle className="h-6 w-6 text-[#037bfc] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800">Expert Consultation</span>
                      <p className="text-muted-foreground mt-1">
                        A local specialist will contact you within 24 hours for a detailed property assessment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white transition-colors duration-200">
                    <CheckCircle className="h-6 w-6 text-[#037bfc] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800">Comprehensive Strategy</span>
                      <p className="text-muted-foreground mt-1">
                        Get a complete market analysis and personalized pricing strategy for maximum returns
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#037bfc] to-[#03c3fc] text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50 leading-relaxed">
                Access your seller dashboard to create listings, track your sales progress, and manage your property portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-white text-[#037bfc] hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <Link to="/dashboard/seller" className="flex items-center gap-2">
                    Go to Dashboard
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300"
                  size="lg"
                >
                  <a href="#valuation" className="flex items-center gap-2">
                    Get Valuation
                    <TrendingUp className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">30</div>
                  <div className="text-blue-100">Days Average Sale</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">15%</div>
                  <div className="text-blue-100">Above Market Price</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;