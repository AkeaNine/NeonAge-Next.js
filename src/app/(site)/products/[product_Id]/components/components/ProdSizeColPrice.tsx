import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProdSizeColPriceProps {
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

const ProdSizeColPrice: React.FC<ProdSizeColPriceProps> = ({
  product,
  // selectedColor,
  // selectedSize,
}) => {
  // console.log(selectedColor);
  // console.log(selectedSize);

  // const router = useRouter();
  // useEffect(() => {
  //   product.colors.map((item, index) => {
  //     if (item.hasOwnProperty(selectedColor)) {
  //       router.replace(`?color=${selectedColor}&size=${selectedSize}`);
  //     } else {
  //       router.replace(
  //         `?color=${product.colors[0].color}&size=${product.colors[0].sfs[0].size}`
  //       );
  //     }
  //   });
  // }, [selectedColor, selectedSize]);

  return <div>ProdSizeColPrice</div>;
};

export default ProdSizeColPrice;
