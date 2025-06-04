
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Globe className="w-5 h-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-600">EN</span>
      <Switch
        checked={language === 'ar'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-[#34b2ff]"
      />
      <span className="text-sm font-medium text-gray-600">العربية</span>
    </div>
  );
};

export default LanguageToggle;
