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
import SlidingPoductCartBTN from "./SlidingPoductCartBTN";

interface SlidingProductModelProps {
  product: any;
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
        <Link href={`/products/${product._id}`}>
          <ProductImage image={product.colors[0].dp} />
        </Link>
      </div>
      {/* </Link> */}
      <CardHeader className="pt-2 pb-0 px-3">
        <CardTitle className="hover:underline">
          {/* @ts-ignore */}
          <Link href={`/products/${product._id}`}>
            {/* @ts-ignore */}
            <p className="line-clamp-2 text-sm md:text-lg tracking-wider">
              {product.title}
            </p>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 px-3">
        <div className="">
          {/* @ts-ignore */}
          {product.discount > 0 ? (
            <>
              {/* @ts-ignore */}
              <p className="text-red-500 text-sm line-through">{product.price}৳</p>
              <p className="text-lg">
                {/* @ts-ignore */}
                {Math.round(product.price * (1 - product.discount / 100))}৳
              </p>
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
          <SlidingPoductCartBTN
            id={product._id}
            color={product.colors[0].color}
            size={product.colors[0].sfs[0].size}
            title={product.title}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SlidingProductModel;
