interface CartProductsProps {
  cart: never[];
}

const CartProducts = ({ cart }: CartProductsProps) => {
  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <div>{item.color}</div>
              <div>{item.qty}</div>
            </div>
          ))}
        </>
      ) : (
        <div>Cart is empty</div>
      )}
    </>
  );
};

export default CartProducts;
