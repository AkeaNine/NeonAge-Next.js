import Link from "next/link";
import client from "../../../../../hooks/Sanity"
import { useState } from "react";
import axios from "axios";


interface CartProductModelProps {
    product: any
    index: number
}

const CartProductModel = async ({product, index}: CartProductModelProps) => {

    const [price, setPrice] = useState<number>()
    const [image, setImage] = useState<string>()

    const id = product.id
    const title = product.title
    const color = product.color
    const size = product.size
    const qty = product.qty

    const productInfo = await axios.post("/api/user/getCartProductInfo", id)
    console.log(productInfo);
    console.log(id);
    
    

  return (
    <div key={index} className="w-full h-32 grid grid-cols-4 border-b">
      <div>{/* image */}</div>
      <div className=" col-span-2">
        {/* name, color, size */}
        <div>
          <Link href={`/products/${product._id}`}>
            {/* @ts-ignore */}
            <p className="line-clamp-2 text-md md:text-lg">{product.title}</p>
          </Link>
        </div>
        {product.color}
      </div>
      <div>
        {/* qty, remove */}
        {product.qty}
      </div>
    </div>
  );
};

export default CartProductModel;
