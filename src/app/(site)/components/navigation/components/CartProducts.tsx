
interface CartProductsProps {
  cart: never[]
}

const CartProducts = ({ cart }: CartProductsProps) => {

  return (
    <>
      {cart.map((item, index) => (
        <div>{item.qty}</div>
      ))}
    </>
  );
};

export default CartProducts;
