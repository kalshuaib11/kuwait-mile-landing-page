import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Instagram, Utensils, ShoppingBag, Pill, ShoppingCart, Truck, Package, BarChart3, HandHeart, Map, Users, Headphones, MapIcon, Brain, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import LanguageToggle from "@/components/LanguageToggle";
import MobileNav from "@/components/MobileNav";
import BackgroundAnimation from "@/components/BackgroundAnimation";
const Index = () => {
  const {
    language,
    isRTL,
    toggleLanguage
  } = useLanguage();
  const t = translations[language];
  const handlePhoneCall = () => {
    window.location.href = "tel:+96598571783";
  };
  const handleWhatsAppGeneral = () => {
    window.open("https://wa.me/96598571783?text=Hello%20FastMile,%20I%27m%20interested%20in%20your%20delivery%20services.", "_blank");
  };
  const handleWhatsAppPartnership = () => {
    window.open("https://wa.me/96598571783?text=Hello%20FastMile,%20I%27m%20a%20business%20owner%20interested%20in%20partnering%20with%20you.", "_blank");
  };
  const handleMerchantLogin = () => {
    window.open("https://fastmile-merchant-prod.disruptem.com/auth/login", "_blank");
  };
  return <div className={`min-h-screen bg-white ${isRTL ? 'font-cairo' : ''}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img alt="FastMile" src="/lovable-uploads/b20a403a-ada4-4723-a619-b6fe026270fd.png" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#who-we-serve" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.whoWeServe}
              </a>
              <a href="#services" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.services}
              </a>
              <a href="#why-us" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.whyUs}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.contact}
              </a>
              <LanguageToggle />
              <Button onClick={handleMerchantLogin} variant="outline" className="border-[#34b2ff] text-[#34b2ff] hover:bg-[#34b2ff] hover:text-white px-4">
                {t.nav.merchantLogin}
              </Button>
              
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3 rtl:space-x-reverse">
              {/* Arabic Toggle Button */}
              <button onClick={toggleLanguage} className="text-black hover:text-[#34b2ff] transition-colors text-xl font-bold px-2 py-1 rounded cursor-pointer" aria-label="Toggle language">
                {language === 'en' ? 'ع' : 'EN'}
              </button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-[90vh] flex items-center">
        <BackgroundAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black mb-6 tracking-tight font-extrabold ${isRTL ? 'leading-[1.3] font-bold' : 'leading-[0.9]'}`}>
                {t.hero.headline}
                <br />
                <span className={`text-[#34b2ff] relative font-extrabold ${isRTL ? 'block mt-4' : ''}`}>
                  {t.hero.headlineAccent}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#34b2ff]/20 rounded-full"></div>
                </span>
              </h1>
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 ${isRTL ? 'leading-[1.4] mt-8' : ''}`}>
                {t.hero.subheadline}
              </div>
            </div>

            {/* Subheadline */}
            <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light ${isRTL ? 'leading-[1.6]' : 'leading-relaxed'}`}>
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" onClick={handlePhoneCall} className="bg-[#34b2ff] hover:bg-[#2899e6] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                {t.hero.talkToSales}
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppGeneral} className="border-3 border-[#34b2ff] text-[#34b2ff] hover:bg-[#34b2ff] hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all hover:scale-105">
                <MessageCircle className={`${isRTL ? 'ml-3' : 'mr-3'} h-6 w-6`} />
                {t.hero.whatsappUs}
              </Button>
            </div>

            {/* Merchant CTA */}
            <div className="mb-16">
              <Button variant="outline" size="lg" onClick={handleMerchantLogin} className="border-2 border-gray-300 text-gray-700 hover:border-[#34b2ff] hover:text-[#34b2ff] px-10 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105">
                {t.hero.becomeMerchant}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.hero.featureTitle}</h3>
                  <p className={`text-lg text-gray-600 ${isRTL ? 'leading-[1.6]' : 'leading-relaxed'}`}>
                    {t.hero.featureDesc}
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
      <section id="who-we-serve" className="relative py-32 bg-white overflow-hidden">
        <BackgroundAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-8 leading-tight">
              {t.whoWeServe.title} <span className="text-[#34b2ff]">{t.whoWeServe.titleAccent}</span>
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              {t.whoWeServe.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            title: t.whoWeServe.restaurants,
            icon: Utensils,
            desc: t.whoWeServe.restaurantsDesc
          }, {
            title: t.whoWeServe.onlineStores,
            icon: ShoppingBag,
            desc: t.whoWeServe.onlineStoresDesc
          }, {
            title: t.whoWeServe.pharmacies,
            icon: Pill,
            desc: t.whoWeServe.pharmaciesDesc
          }, {
            title: t.whoWeServe.groceryShops,
            icon: ShoppingCart,
            desc: t.whoWeServe.groceryShopsDesc
          }].map((item, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#34b2ff] bg-white hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white rounded-3xl overflow-hidden">
                <CardContent className="p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#34b2ff]/10 rounded-2xl mb-8 group-hover:bg-[#34b2ff] transition-all duration-300">
                    <item.icon className="w-10 h-10 text-[#34b2ff] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        <BackgroundAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-8 leading-tight">
              {t.services.title} <span className="text-[#34b2ff]">{t.services.titleAccent}</span>
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{
            title: t.services.localDelivery,
            desc: t.services.localDeliveryDesc,
            icon: Truck
          }, {
            title: t.services.bulkOrders,
            desc: t.services.bulkOrdersDesc,
            icon: Package
          }, {
            title: t.services.merchantDashboard,
            desc: t.services.merchantDashboardDesc,
            icon: BarChart3
          }, {
            title: t.services.contractPlans,
            desc: t.services.contractPlansDesc,
            icon: HandHeart
          }].map((service, index) => <div key={index} className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#34b2ff]/20">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34b2ff]/10 rounded-2xl flex-shrink-0">
                    <service.icon className="w-8 h-8 text-[#34b2ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight">{service.title}</h3>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose FastMile */}
      <section id="why-us" className="relative py-32 bg-white overflow-hidden">
        <BackgroundAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-8 leading-tight">
              {t.whyUs.title} <span className="text-[#34b2ff]">{t.whyUs.titleAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[{
            title: t.whyUs.speakStreet,
            desc: t.whyUs.speakStreetDesc,
            icon: Map
          }, {
            title: t.whyUs.friendlyDrivers,
            desc: t.whyUs.friendlyDriversDesc,
            icon: Users
          }, {
            title: t.whyUs.realtimeSupport,
            desc: t.whyUs.realtimeSupportDesc,
            icon: Headphones
          }, {
            title: t.whyUs.fullCoverage,
            desc: t.whyUs.fullCoverageDesc,
            icon: MapIcon
          }, {
            title: t.whyUs.smartDispatching,
            desc: t.whyUs.smartDispatchingDesc,
            icon: Brain
          }, {
            title: t.whyUs.reliablePartnerships,
            desc: t.whyUs.reliablePartnershipsDesc,
            icon: Star
          }].map((feature, index) => <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#34b2ff]/10 rounded-3xl mb-8 group-hover:bg-[#34b2ff] transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-12 h-12 text-[#34b2ff] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight">{feature.title}</h3>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-sm mx-auto">{feature.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-sm overflow-hidden">
        <BackgroundAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-12 leading-tight">
              {t.trustedBy.title} <span className="text-[#34b2ff]">{t.trustedBy.titleAccent}</span>
            </h3>
          </div>
          
          {/* Scrolling Logos Container */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll space-x-16 md:space-x-24">
                {/* First set of logos */}
                <img src="/lovable-uploads/08d95502-c271-44a8-a042-6e161edc5f65.png" alt="Bascota" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/5efbf4e2-d53d-4348-afa3-fd50555536d8.png" alt="Pharmazone" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/9c56aeed-f6ca-4c81-82e8-92c4fb0fe614.png" alt="Talabat" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                
                {/* Duplicate set for seamless loop */}
                <img src="/lovable-uploads/08d95502-c271-44a8-a042-6e161edc5f65.png" alt="Bascota" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/5efbf4e2-d53d-4348-afa3-fd50555536d8.png" alt="Pharmazone" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/9c56aeed-f6ca-4c81-82e8-92c4fb0fe614.png" alt="Talabat" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                
                {/* Third set for extra smoothness */}
                <img src="/lovable-uploads/08d95502-c271-44a8-a042-6e161edc5f65.png" alt="Bascota" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/5efbf4e2-d53d-4348-afa3-fd50555536d8.png" alt="Pharmazone" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
                <img src="/lovable-uploads/9c56aeed-f6ca-4c81-82e8-92c4fb0fe614.png" alt="Talabat" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" />
              </div>
            </div>
            
            {/* Pause on hover overlay */}
            <div className="absolute inset-0 hover:[&>div>div]:pause"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-[#34b2ff] via-[#2899e6] to-[#1e7cc7] relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.contact.emailUs}</h3>
              <p className="text-blue-100 text-lg">kwfastmile@gmail.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={handlePhoneCall}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.contact.callUs}</h3>
              <p className="text-blue-100 text-lg">‪+965 9857 1783‬</p>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <MapPin className={`w-8 h-8 text-white ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <h3 className="text-2xl font-bold text-white">{t.contact.headOffice}</h3>
            </div>
            <p className="text-blue-100 text-center text-lg mb-8 leading-relaxed whitespace-pre-line">
              {t.contact.address}
            </p>
            
            {/* Compact Google Maps Embed */}
            <div className="w-full max-w-2xl mx-auto h-64 rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.658469325736!2d47.9706229!3d29.3749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf85fd5ac93315%3A0xd542b96c60b7f3d2!2sSharq%2C%20Kuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2s!4v1735919234567!5m2!1sen!2s" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl"></iframe>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsAppPartnership} className="bg-white text-[#34b2ff] hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-2xl transition-all hover:scale-105 shadow-xl">
              {t.contact.partnerWithUs}
            </Button>
            <Button variant="outline" size="lg" onClick={handleMerchantLogin} className="border-2 border-white text-white hover:bg-white hover:text-[#34b2ff] px-12 py-4 text-xl font-bold rounded-2xl transition-all hover:scale-105">
              {t.contact.startAsVendor}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/lovable-uploads/9a923dd4-975a-42f0-bf9b-51a203a60a33.png" alt="FastMile" className="h-24 w-auto" />
            </div>
            
            <div className={`flex flex-wrap justify-center md:justify-start ${isRTL ? 'space-x-reverse' : ''} space-x-12 mb-6 md:mb-0`}>
              <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">{t.footer.about}</a>
              <a href="#services" className="text-lg text-gray-300 hover:text-white transition-colors">{t.footer.services}</a>
              <a href="#contact" className="text-lg text-gray-300 hover:text-white transition-colors">{t.footer.contact}</a>
              <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">{t.footer.becomePartner}</a>
              <a href="#" onClick={handleMerchantLogin} className="text-lg text-[#34b2ff] hover:text-white hover:underline transition-colors cursor-pointer">{t.footer.merchantPortal}</a>
            </div>

            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
              <a href="https://www.instagram.com/fastmilekw/" className="text-gray-300 hover:text-[#34b2ff] transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-800 text-center">
            <p className="text-lg text-gray-400">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;