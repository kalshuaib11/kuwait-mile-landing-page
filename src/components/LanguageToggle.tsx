
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <Button
        onClick={() => language === 'en' && toggleLanguage()}
        variant="ghost"
        size="sm"
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'ar'
            ? 'bg-[#34b2ff] text-white hover:bg-[#34b2ff]/90'
            : 'bg-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-200'
        }`}
      >
        <span className="hidden sm:inline">العربية</span>
        <span className="sm:hidden">AR</span>
      </Button>
      <Button
        onClick={() => language === 'ar' && toggleLanguage()}
        variant="ghost"
        size="sm"
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-[#34b2ff] text-white hover:bg-[#34b2ff]/90'
            : 'bg-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-200'
        }`}
      >
        <span className="hidden sm:inline">English</span>
        <span className="sm:hidden">EN</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
