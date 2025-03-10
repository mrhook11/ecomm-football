import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/i18n";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const { t } = useLanguage();

  return (
    <div className="w-full h-full bg-white p-4 border-r border-gray-200 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">{t("filter.title")}</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground"
        >
          {t("filter.clear")}
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">{t("filter.price")}</h3>
        <Slider
          defaultValue={[0, 200]}
          max={200}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">{t("filter.brands")}</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={`brand-${brand.id}`} />
              <label
                htmlFor={`brand-${brand.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      {/* Sizes */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">{t("filter.size")}</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button key={size} variant="outline" className="text-sm h-9">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      {/* Features */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">{t("filter.features")}</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-2">
              <Checkbox id={`feature-${feature.id}`} />
              <label
                htmlFor={`feature-${feature.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {feature.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Button className="w-full">{t("filter.apply")}</Button>
      </div>
    </div>
  );
};

const brands = [
  { id: 1, name: "Premier Pro" },
  { id: 2, name: "SportMaster" },
  { id: 3, name: "KickStart" },
  { id: 4, name: "TechBall" },
  { id: 5, name: "Champion" },
  { id: 6, name: "SandKick" },
];

const sizes = ["Size 3", "Size 4", "Size 5"];

const features = [
  { id: 1, name: "Match Ball" },
  { id: 2, name: "Training Ball" },
  { id: 3, name: "Indoor" },
  { id: 4, name: "Outdoor" },
  { id: 5, name: "All-Weather" },
  { id: 6, name: "Hand-Stitched" },
];

export default FilterSidebar;
