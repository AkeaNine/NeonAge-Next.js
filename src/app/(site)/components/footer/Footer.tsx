import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import NewsLetterForm from "./components/NewsLetterForm";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[600px] bg-[#4c556473] p-5 rounded-sm">
          <NewsLetterForm />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-fit">
            <h1 className="uppercase">services</h1>
            <hr className="w-full" />
          </div>
          <div className="text-sm md:text-base">
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">How To Order</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Return & Exchange</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">
                  Shipping & Delivery
                </p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">
                  Billing & Payments
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="w-fit">
            <h1 className="uppercase">Account</h1>
            <hr className="w-full" />
          </div>
          <div className="text-sm md:text-base">
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Orders</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Track your orders</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Coupons</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Star Points</p>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <p className="hover:underline text-center">Returns</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 col-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
          <div className="w-fit">
            <h1 className="uppercase">Get in touch</h1>
            <hr className="w-full" />
          </div>
          <div className="flex flex-col space-y-1">
            <div>
              <Link href={""}>
                <p className="hover:underline text-sm md:text-base text-center">
                  Contact us
                </p>
              </Link>
            </div>
            <div>
              <p className="text-center">or</p>
            </div>
            <div className="flex flex-col space-y-2">
            <div className=" w-[215px] border border-gray-100 p-2 rounded-md hover:border-orange-500 hover:text-orange-500">
              <Link href={""}>
                <div className="flex items-center space-x-2">
                  <div>
                    <AiFillMail size={22} />
                  </div>
                  <span className="h-8 w-[2px] bg-white block"></span>
                  <div>
                    <p className="text-xs">Mail at</p>
                    <p className="text-white text-sm">neonagebd@gmail.com</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" w-[215px] border border-gray-100 p-2 rounded-md hover:border-orange-500 hover:text-orange-500">
              <Link href={""}>
                <div className="flex items-center space-x-2">
                  <div>
                    <AiTwotonePhone size={22} />
                  </div>
                  <span className="h-8 w-[2px] bg-white block"></span>
                  <div>
                    <p className="text-xs">Call us</p>
                    <p className="text-white text-sm">0123456789</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" w-[215px] border border-gray-100 p-2 rounded-md hover:border-orange-500 hover:text-orange-500">
              <Link href={""}>
                <div className="flex items-center space-x-2">
                  <div>
                    <MdLocationOn size={22} />
                  </div>
                  <span className="h-8 w-[2px] bg-white block"></span>
                  <div>
                    <p className="text-xs">Find our store</p>
                    <p className="text-white text-sm">Store Locator</p>
                  </div>
                </div>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-4 p-4">
          <div>
            <h1 className="uppercase text-center">Follow us</h1>
            <hr />
          </div>
          <div className=" w-full flex justify-center space-x-2">
            <div>
              <Link href={""}>
                <FaSquareFacebook size={26} />
              </Link>
            </div>
            <div>
              <Link href={""}>
                <BsInstagram size={26} />
              </Link>
            </div>
            <div>
              <Link href={""}>
                <FaTwitter size={26} />
              </Link>
            </div>
            <div>
              <Link href={""}>
                <BsPinterest size={26} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
