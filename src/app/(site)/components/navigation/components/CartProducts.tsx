import Link from "next/link";
import CartProductModel from "./CartProductModel";

interface CartProductsProps {
  cart: never[];
}

const CartProducts = ({ cart }: CartProductsProps) => {

  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <CartProductModel product={item} index={index}/>
          ))}
        </>
      ) : (
        <div>Cart is empty</div>
      )}
    </>
  );
};

export default CartProducts;
