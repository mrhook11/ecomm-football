import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-4 md:hidden">
      <NavItem
        to="/"
        icon={<Home className="h-5 w-5" />}
        label={t("nav.home")}
        active={path === "/"}
      />
      <NavItem
        to="/store"
        icon={<ShoppingCart className="h-5 w-5" />}
        label={t("nav.store")}
        active={path === "/store"}
      />
      <NavItem
        to="#"
        icon={<Search className="h-5 w-5" />}
        label={t("nav.search")}
      />
      <NavItem
        to="/about"
        icon={<Heart className="h-5 w-5" />}
        label={t("nav.about")}
        active={path === "/about"}
      />
      <NavItem
        to="/contact"
        icon={<User className="h-5 w-5" />}
        label={t("nav.contact")}
        active={path === "/contact"}
      />
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, icon, label, active = false }: NavItemProps) => {
  return (
    <Link to={to} className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "p-1 rounded-full",
          active ? "text-primary" : "text-muted-foreground",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-xs mt-1",
          active ? "text-primary font-medium" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default BottomNavigation;
