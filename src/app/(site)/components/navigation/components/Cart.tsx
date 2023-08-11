import CardSheet from "./CardSheet";

function Cart() {
  return (
    <div>
      <div className="relative">
        <div className="leading-none absolute right-1 bottom-4 bg-red-500 rounded-full">
          <span className="text-md text-white">4</span>
        </div>
        <CardSheet />
      </div>
    </div>
  );
}

export default Cart;
