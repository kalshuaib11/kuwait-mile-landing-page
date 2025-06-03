import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Instagram, Utensils, ShoppingBag, Pill, ShoppingCart, Truck, Package, BarChart3, HandHeart, Map, Users, Headphones, MapIcon, Brain, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/cc33c8df-a916-45a8-b0e6-9554aa9d7d4d.png" 
                alt="FastMile" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-black transition-colors">Why Us</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
              <Button className="bg-[#34b2ff] hover:bg-[#2899e6] text-white px-6">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-[0.9] mb-6 tracking-tight">
                Delivery You Can
                <br />
                <span className="text-[#34b2ff] relative">
                  Count On
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#34b2ff]/20 rounded-full"></div>
                </span>
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Across All of Kuwait
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              From city streets to co-ops and malls — FastMile delivers reliably and fast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-[#34b2ff] hover:bg-[#2899e6] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Talk to Sales
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-3 border-[#34b2ff] text-[#34b2ff] hover:bg-[#34b2ff] hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Us
              </Button>
            </div>

            {/* Modern Feature Card */}
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#34b2ff]/5 to-transparent"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#34b2ff] rounded-2xl mb-6 shadow-lg">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast & Reliable</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Delivering across Kuwait with precision and care
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#34b2ff]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#34b2ff]/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a local café or a fast-growing e-store — we've got your delivery covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Restaurants", icon: Utensils, desc: "From local cafés to fine dining" },
              { title: "Online Stores", icon: ShoppingBag, desc: "E-commerce and retail delivery" },
              { title: "Pharmacies", icon: Pill, desc: "Medical and health products" },
              { title: "Grocery Shops", icon: ShoppingCart, desc: "Fresh food and daily essentials" }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#34b2ff]">
                <CardContent className="p-8 text-center">
                  <item.icon className="w-12 h-12 text-[#34b2ff] mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive delivery solutions tailored for Kuwait's business landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Local Last-Mile Delivery",
                desc: "Door-to-door delivery across all Kuwait governorates with real-time tracking",
                icon: Truck
              },
              {
                title: "Bulk Order Fulfillment",
                desc: "Handle high-volume orders with our scalable delivery infrastructure",
                icon: Package
              },
              {
                title: "Merchant Dashboard",
                desc: "Complete delivery management with logs, analytics, and customer insights",
                icon: BarChart3
              },
              {
                title: "Contract-Based Plans",
                desc: "Flexible partnership models designed for growing businesses",
                icon: HandHeart
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <service.icon className="w-8 h-8 text-[#34b2ff] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FastMile */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">Why Choose FastMile</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "We speak your street",
                desc: "Hyperlocal focus with intimate knowledge of Kuwait's neighborhoods",
                icon: Map
              },
              {
                title: "Friendly local drivers",
                desc: "Professional, courteous delivery partners who understand local culture",
                icon: Users
              },
              {
                title: "Real-time support",
                desc: "Instant customer service through WhatsApp and phone support",
                icon: Headphones
              },
              {
                title: "Full Kuwait coverage",
                desc: "From Kuwait City to Ahmadi - complete nationwide delivery network",
                icon: MapIcon
              },
              {
                title: "Smart dispatching",
                desc: "AI-powered routing for fastest and most efficient deliveries",
                icon: Brain
              },
              {
                title: "Reliable partnerships",
                desc: "Build lasting business relationships with transparent pricing",
                icon: Star
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34b2ff]/10 rounded-full mb-6 group-hover:bg-[#34b2ff] transition-colors">
                  <feature.icon className="w-8 h-8 text-[#34b2ff] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-8">Trusted By Kuwait's Leading Businesses</h3>
            <div className="flex justify-center items-center space-x-12 opacity-40">
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started / Contact */}
      <section id="contact" className="py-20 bg-[#34b2ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Partner with FastMile Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join Kuwait's most reliable delivery network. Get started with a custom plan tailored to your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <MessageCircle className="w-8 h-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-blue-100">+965 98571783</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Mail className="w-8 h-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-100">kwfastmile@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Phone className="w-8 h-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-100">+965 98571783</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-[#34b2ff] hover:bg-gray-100 px-12 py-4 text-lg font-semibold"
          >
            Start Your Partnership
          </Button>
        </div>
      </section>

      {/* Footer with Map */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Head Office</h3>
              <div className="flex items-start space-x-4 mb-8">
                <MapPin className="w-6 h-6 text-[#34b2ff] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold mb-2">FastMile Head Office</p>
                  <p className="text-gray-300 leading-relaxed">
                    Kuwait City, Sharq, Block 2<br />
                    Ahmad Aljaber Street, CBK Building, Floor 1
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 h-64">
              <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src="/lovable-uploads/cc33c8df-a916-45a8-b0e6-9554aa9d7d4d.png" 
                  alt="FastMile" 
                  className="h-8 w-auto"
                />
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start space-x-8 mb-4 md:mb-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Partner</a>
              </div>

              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/fastmilekw/" className="text-gray-300 hover:text-[#34b2ff] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#34b2ff] transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">© 2025 FastMile. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
