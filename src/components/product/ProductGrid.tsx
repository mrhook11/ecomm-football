import ProductCard from "./ProductCard";
import { useLanguage } from "@/lib/i18n";

interface ProductGridProps {
  products?: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
    rating: number;
    isNew?: boolean;
    discount?: number;
  }>;
}

const ProductGrid = ({ products = defaultProducts }: ProductGridProps) => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{t("products.featured")}</h2>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>{t("products.sort.popular")}</option>
          <option>{t("products.sort.newest")}</option>
          <option>{t("products.sort.price.low")}</option>
          <option>{t("products.sort.price.high")}</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

const defaultProducts = [
  {
    id: "1",
    name: "Professional Match Football",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=300&q=80",
    brand: "Premier Pro",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "2",
    name: "Training Football - Size 5",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=300&q=80",
    brand: "SportMaster",
    rating: 4.5,
    discount: 15,
  },
  {
    id: "3",
    name: "Youth League Football",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&q=80",
    brand: "KickStart",
    rating: 4.2,
  },
  {
    id: "4",
    name: "Indoor Futsal Ball",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=300&q=80",
    brand: "TechBall",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Limited Edition World Cup Replica",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&q=80",
    brand: "Champion",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "6",
    name: "Beach Football",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&q=80",
    brand: "SandKick",
    rating: 4.1,
    discount: 10,
  },
  {
    id: "7",
    name: "All-Weather Training Ball",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=300&q=80",
    brand: "WeatherPro",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Mini Football Set",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=300&q=80",
    brand: "LittleKickers",
    rating: 4.3,
    discount: 20,
  },
];

export default ProductGrid;
