
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import LanguageToggle from "./LanguageToggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const handlePhoneCall = () => {
    window.location.href = "tel:+96598571783";
    setOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={isRTL ? "right" : "left"} className="w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <img 
              alt="FastMile" 
              src="/lovable-uploads/b20a403a-ada4-4723-a619-b6fe026270fd.png" 
              className="h-10 w-auto" 
            />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <nav className="space-y-2 px-6">
              <button
                onClick={() => handleNavClick('#who-we-serve')}
                className="block w-full text-left py-3 text-lg text-gray-600 hover:text-black transition-colors border-b border-gray-100"
              >
                {t.nav.whoWeServe}
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="block w-full text-left py-3 text-lg text-gray-600 hover:text-black transition-colors border-b border-gray-100"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => handleNavClick('#why-us')}
                className="block w-full text-left py-3 text-lg text-gray-600 hover:text-black transition-colors border-b border-gray-100"
              >
                {t.nav.whyUs}
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-left py-3 text-lg text-gray-600 hover:text-black transition-colors border-b border-gray-100"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
          
          {/* Footer with Language Toggle and CTA */}
          <div className="p-6 border-t space-y-4">
            <div className="flex justify-center">
              <LanguageToggle />
            </div>
            <Button 
              onClick={handlePhoneCall} 
              className="w-full bg-[#34b2ff] hover:bg-[#2899e6] text-white py-3 text-lg font-semibold"
            >
              {t.nav.talkToSales}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
