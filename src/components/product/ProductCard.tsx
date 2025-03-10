import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  brand?: string;
  rating?: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  id = "1",
  name = "Professional Match Football",
  price = 89.99,
  image = "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=300&q=80",
  brand = "Premier Pro",
  rating = 4.5,
  isNew = false,
  discount = 0,
}: ProductCardProps) => {
  const { t } = useLanguage();
  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Wishlist button */}
      <button className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white">
        <Heart className="h-4 w-4 text-gray-500 hover:text-red-500" />
      </button>

      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isNew && (
          <Badge className="bg-blue-500 hover:bg-blue-600">
            {t("product.new")}
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="bg-red-500 hover:bg-red-600">-{discount}%</Badge>
        )}
      </div>

      {/* Image */}
      <div className="relative pt-[100%] bg-gray-100">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm text-muted-foreground mb-1">{brand}</div>
        <h3 className="font-medium line-clamp-2 mb-1 flex-grow">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {discount > 0 && (
              <span className="text-sm line-through text-muted-foreground">
                ${price.toFixed(2)}
              </span>
            )}
            <span className="font-semibold text-primary">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>
          <Button size="sm" className="rounded-full px-3">
            {t("product.add")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
