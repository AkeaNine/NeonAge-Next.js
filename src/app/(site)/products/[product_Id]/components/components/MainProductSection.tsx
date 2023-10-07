"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProdSizeColPrice from "./ProdSizeColPrice";
import ProductImageSlider from "./ProductImageSlider";

interface MainProductSectionProps {
  product: {
    price: number;
    sku: string;
    title: string;
    categories: [];
    tags: [];
    colors: [
      {
        dp: [];
        sfs: [{ size: string; _key: string; stock: number }];
        images: [];
        color: string;
      }
    ];
    description: [];
    discount: number;
  };
  selectedColor: string | string[] | undefined;
  selectedSize: string | string[] | undefined;
}

const MainProductSection: React.FC<MainProductSectionProps> = ({
  product,
  selectedColor,
  selectedSize,
}) => {
  console.log(product);
  const router = useRouter();

  const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(entry);
  
});

  useEffect(() => {
    let isApiSubscribed = true;
    const handlePopstate = () => {
      // Reload the page when the forward button is used
      router.refresh();
    };
    window.addEventListener('popstate', handlePopstate);
    if (isApiSubscribed) {
      router.replace(`?color=${selectedColor}&size=${selectedSize}`);
    }
    return () => {
      isApiSubscribed = false;
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [selectedColor, selectedSize, router]);

  return (
    <div className="w-full h-fit md:flex">
      {/* main product */}
      <div className="w-full md:w-2/4">
        {/* images */}
        <ProductImageSlider />
      </div>
      <div className="w-full md:w-2/4">
        <div>
          {/* name price color size */}
          <ProdSizeColPrice
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
        </div>
        <div>
          {/* description */}
          Description
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;
