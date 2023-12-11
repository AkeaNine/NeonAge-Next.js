import { Button } from "@/components/ui/button";
import { AiOutlineMinus } from "react-icons/ai";

interface CartItemIncrementProps {
  id: string;
  color: string;
  size: string;
  qty: number;
}

const CartItemIncrement = ({
  id,
  color,
  size,
  qty,
}: CartItemIncrementProps) => {
  function handleBtnClick() {
    if (qty <= 1) {
        return
    } else {
        
    }
  }

  return (
    <div>
      <Button
        className="bg-white text-black border border-black hover:bg-slate-200 rounded-none"
        onClick={() => {
          handleBtnClick();
        }}
      >
        <AiOutlineMinus />
      </Button>
    </div>
  );
};

export default CartItemIncrement;
