import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-2"
      >
        EN
      </Button>
      <Button
        variant={language === "it" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("it")}
        className="h-8 px-2"
      >
        IT
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
