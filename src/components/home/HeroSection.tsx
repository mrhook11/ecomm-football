import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Football image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&q=80"
          alt="Premium Football"
          className="h-[400px] w-auto object-contain rounded-l-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            {t("hero.cta.shop")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-blue-800"
          >
            {t("hero.cta.collections")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
