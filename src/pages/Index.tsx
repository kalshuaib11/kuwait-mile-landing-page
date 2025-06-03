
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Delivery You Can Count On — 
                <span className="text-[#34b2ff]"> Across All of Kuwait</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From city streets to co-ops and malls — FastMile delivers reliably and fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#34b2ff] hover:bg-[#2899e6] text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
                >
                  Talk to Sales
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#34b2ff] text-[#34b2ff] hover:bg-[#34b2ff] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#34b2ff] to-blue-600 rounded-3xl p-8 transform rotate-3 shadow-xl">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34b2ff] rounded-full mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7h-3V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10h2a2 2 0 0 0 4 0h6a2 2 0 0 0 4 0h2V9a2 2 0 0 0-2-2zM4 5h10v2H4V5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
                    <p className="text-gray-600">Delivering across Kuwait with precision and care</p>
                  </div>
                </div>
              </div>
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
              { title: "Restaurants", icon: "🍽️", desc: "From local cafés to fine dining" },
              { title: "Online Stores", icon: "🛍️", desc: "E-commerce and retail delivery" },
              { title: "Pharmacies", icon: "💊", desc: "Medical and health products" },
              { title: "Grocery Shops", icon: "🛒", desc: "Fresh food and daily essentials" }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#34b2ff]">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
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
                icon: "🚚"
              },
              {
                title: "Bulk Order Fulfillment",
                desc: "Handle high-volume orders with our scalable delivery infrastructure",
                icon: "📦"
              },
              {
                title: "Merchant Dashboard",
                desc: "Complete delivery management with logs, analytics, and customer insights",
                icon: "📊"
              },
              {
                title: "Contract-Based Plans",
                desc: "Flexible partnership models designed for growing businesses",
                icon: "🤝"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{service.icon}</div>
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
                icon: "🗺️"
              },
              {
                title: "Friendly local drivers",
                desc: "Professional, courteous delivery partners who understand local culture",
                icon: "👥"
              },
              {
                title: "Real-time support",
                desc: "Instant customer service through WhatsApp and phone support",
                icon: "💬"
              },
              {
                title: "Full Kuwait coverage",
                desc: "From Kuwait City to Ahmadi - complete nationwide delivery network",
                icon: "🇰🇼"
              },
              {
                title: "Smart dispatching",
                desc: "AI-powered routing for fastest and most efficient deliveries",
                icon: "🧠"
              },
              {
                title: "Reliable partnerships",
                desc: "Build lasting business relationships with transparent pricing",
                icon: "⭐"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34b2ff]/10 rounded-full mb-6 group-hover:bg-[#34b2ff] transition-colors">
                  <span className="text-2xl group-hover:grayscale">{feature.icon}</span>
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
