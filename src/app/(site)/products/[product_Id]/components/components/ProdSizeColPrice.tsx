import { useEffect, useState } from "react";
import AddToCartSec from "./AddToCartSec";
import ColorSizeComp from "./ColorSizeComp";

interface ProdSizeColPriceProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  sfs: [
    {
      size: string;
      _key: string;
      stock: number;
    }
  ];
  sku: string;
  colors: string[];
  selectedColor: string | string[] | undefined;
  selectedSize: string | string[] | undefined;
}

const ProdSizeColPrice = ({
  id,
  discount,
  price,
  title,
  colors,
  sfs,
  sku,
  selectedColor,
  selectedSize,
}: ProdSizeColPriceProps) => {
  // console.log(selectedColor);
  // console.log(selectedSize);

  return (
    <div className="w-full">
      <div className="my-1">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {discount > 0 ? (
        <div className="my-1">
          <div className="flex items-center">
            <p className="text-red-500 line-through text-sm">Price: {price}৳</p>
            <span className="text-sm">&nbsp;-{discount}%</span>
          </div>
          <p className=" text-base font-semibold">
            Price:&nbsp;
            <span className="font-bold text-lg">{price * (1 - discount / 100)}৳</span>
          </p>
        </div>
      ) : (
        <div>
          <p className=" text-lg">
            Price:&nbsp;<span className="font-bold">{price}৳</span>
          </p>
        </div>
      )}
      <div>
        <p className="font-semibold">SKU:&nbsp;<span className=" font-normal">{sku}</span></p>
      </div>
      <ColorSizeComp color={selectedColor} colors={colors} size={selectedSize} sfs={sfs} />
        <AddToCartSec sfs={sfs} size={selectedSize} id={id} />
    </div>
  );
};

export default ProdSizeColPrice;
