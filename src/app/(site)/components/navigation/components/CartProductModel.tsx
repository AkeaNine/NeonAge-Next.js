import Link from "next/link";
import client from "../../../../../hooks/Sanity";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import CartItemIncrement from "./components/CartItemIncrement";
import { Input } from "@/components/ui/input";
import CartItemDecrement from "./components/CartItemDecrement";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCartItem } from "@/app/redux/slices/cart";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CartProductModelProps {
  product: any;
  index: number;
}

const CartProductModel = ({ product, index }: CartProductModelProps) => {
  const [mounted, setMounted] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>();

  const builder = imageUrlBuilder(client);

  function urlFor(image: any) {
    return builder.image(image);
  }

  const id = product.id;
  const title = product.title;
  const color = product.color;
  const size = product.size;
  const qty = product.qty;

  const dispatch = useDispatch();
  const session = useSession();
  const { toast } = useToast();

  async function getProductInfo(id: string, color: string) {
    try {
      await axios
        .post("/api/user/getCartProductInfo", JSON.stringify({ id, color }))
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setImage(urlFor(res.data.dp).url());
            setPrice((prevState) => {
              return res.data.price;
            });
          }
        });
    } catch (error: any) {
      console.log("horrible");
    }
  }
  function HandleDeleteBtnClick() {
    const prodToRemove = {
      id: id,
      qty: qty,
      color: color,
      size: size,
      title: title,
    };
    if (session.status === "authenticated") {
      try {
        dispatch(removeCartItem({ prodToRemove, authenticated: true }));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
      } catch (error: any) {
        toast({
          variant: "destructive",
          description:
            "Something went wrong. Please refresh the page and try again",
        });
      }
    } else {
      try {
        dispatch(removeCartItem({ prodToRemove, authenticated: false }));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
      } catch (error: any) {
        toast({
          variant: "destructive",
          description:
            "Something went wrong. Please refresh the page and try again",
        });
      }
    }
  }
  useEffect(() => {
    try {
      getProductInfo(id, color);
    } catch (error) {
      console.log("ehh");
    }
    setMounted(true);
  }, [mounted]);

  const imageStyle = {
    height: "100%",
    width: "auto",
  };

  return (
    <div
      key={index}
      className="w-full h-32 p-[0.4rem] grid grid-cols-8 border-b"
    >
      <div className="col-span-2 h-full w-full relative">
        {/* image */}
        <Link href={`/products/${id}?color=${color}&size=${size}`}>
          <Image
            src={image}
            alt={""}
            priority
            fill
            className="w-auto h-full object-cover"
          />
        </Link>
      </div>
      <div className="col-span-5 flex flex-col justify-between p-1">
        {/* name, color, size, price */}
        <div className="">
          <Link href={`/products/${id}?color=${color}&size=${size}`}>
            {/* @ts-ignore */}
            <p className="line-clamp-2 font-semibold text-sm leading-4 hover:underline">
              {title}
            </p>
          </Link>
        </div>
        <div className="">
          <p className="text-xs">
            Color: <span className=" font-medium">{color}</span>
          </p>
          <p className="text-xs">
            Size: <span className=" font-medium">{size}</span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-xs md:text-sm">
            Price:
            <span className=" font-semibold">
              {price !== 0 ? (
                <>
                  {" "}
                  {price}৳ x {qty}
                </>
              ) : (
                <>Loading...</>
              )}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        {/* remove */}
        <div
          className="w-full py-1 flex justify-center border cursor-pointer"
          onClick={() => HandleDeleteBtnClick()}
        >
          <MdDelete size={20} />
        </div>
      </div>
    </div>
  );
};

export default CartProductModel;
