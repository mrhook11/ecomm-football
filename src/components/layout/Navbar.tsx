import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="text-xl font-bold text-primary">
          FootballStore
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/store"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {t("nav.store")}
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {t("nav.contact")}
        </Link>
      </div>

      <div className="hidden md:flex relative max-w-md w-full mx-4">
        <Input
          type="text"
          placeholder={t("nav.search.placeholder")}
          className="pr-10"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
