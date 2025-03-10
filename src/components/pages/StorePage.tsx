import Navbar from "../layout/Navbar";
import BottomNavigation from "../layout/BottomNavigation";
import Footer from "../layout/Footer";
import ProductGrid from "../product/ProductGrid";
import FilterSidebar from "../product/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Filter } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const StorePage = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-20 md:pb-0 max-w-7xl mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg mb-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t("store.title")}
              </h1>
              <p className="text-blue-100 md:text-lg max-w-2xl">
                {t("store.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="flex md:hidden justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{t("store.category.all")}</h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Filter className="h-4 w-4" />
            <span>{t("filter.title")}</span>
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">{t("store.categories")}</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full">
              {t("store.category.all")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {t("store.category.match")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {t("store.category.training")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {t("store.category.indoor")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {t("store.category.youth")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {t("store.category.accessories")}
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-muted-foreground">
                {t("products.showing")} 24 {t("products.of")} 86{" "}
                {t("products.products")}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {t("language") === "it" ? "Ordina per:" : "Sort by:"}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <span>{t("products.sort.popular")}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ProductGrid />

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <span className="sr-only">
                    {t("language") === "it" ? "Precedente" : "Previous"}
                  </span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 bg-primary text-primary-foreground"
                >
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm" className="h-8 w-8">
                  8
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <span className="sr-only">
                    {t("language") === "it" ? "Successivo" : "Next"}
                  </span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default StorePage;
