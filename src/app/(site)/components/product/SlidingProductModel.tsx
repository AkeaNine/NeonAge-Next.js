import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import ProductImage from "./ProductImage";

interface SlidingProductModelProps {
  product: any[];
}

const SlidingProductModel: React.FC<SlidingProductModelProps> = ({
  product,
}) => {
  return (
    <Card>
      {/* <Link href={`/products/${product._id}`}> */}
      <div className="w-full h-fit relative">
        <div className="absolute text-white right-0 top-1 bg-gray-700 px-2 rounded-full">
          {/* @ts-ignore */}
          {product.discount > 0 && <p>-{product.discount}%</p>}
        </div>
        {/* @ts-ignore */}
        <Link href={`/products/${product._id}`}><ProductImage image={product.images[0]} /></Link>
      </div>
      {/* </Link> */}
      <CardHeader className="p-3">
        <CardTitle className="text-md font-normal h-10 hover:underline">
          {/* @ts-ignore */}
          <Link href={`/products/${product._id}`}>
            {/* @ts-ignore */}
            <p className="line-clamp-2 text-md md:text-lg">{product.title}</p>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="h-10">
          {/* @ts-ignore */}
          {product.discount > 0 ? (
            <>
              <p className="">
                {/* @ts-ignore */}
                {product.price * (1 - product.discount / 100)}৳
              </p>
              {/* @ts-ignore */}
              <p className="text-red-500 line-through">{product.price}৳</p>
            </>
          ) : (
            <div>
              {/* @ts-ignore */}
              <p className="">{product.price}৳</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <div className="w-full flex items-center">
          <button className="bg-black text-white dark:bg-white dark:text-black px-2 py-2 rounded-md flex-1 flex justify-center items-center">
            <p className="flex-shrink overflow-hidden whitespace-nowrap uppercase text-xs md:text-sm">
              add to cart
            </p>
          </button>
          <button className="ml-2 border border-gray-500 rounded-sm p-1">
            <AiOutlineHeart size={22} />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SlidingProductModel;
