import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AddToCardQtyProps {
  // sfs: [
  //     {
  //       size: string;
  //       _key: string;
  //       stock: number;
  //     }
  //   ];
  //   size: string | string[] | undefined;
  qty: number;
  seQtyFunc: (value: string) => void;
}

const AddToCardQty = ({ qty, seQtyFunc }: AddToCardQtyProps) => {
  return (
    <div>
      <p>Quantity:</p>
      <div className="my-2 flex max-w-[200px]">
        <Button
          className="bg-white text-black border border-black hover:bg-slate-200 rounded-none"
          onClick={() => {
            seQtyFunc("decrease");
          }}
        >
          <AiOutlineMinus />
        </Button>
        <Input
          className="border border-black border-l-0 border-r-0 rounded-none text-center text-base"
          value={qty}
          readOnly
        />
        <Button
          className="bg-white text-black border border-black hover:bg-slate-200 rounded-none"
          onClick={() => {
            seQtyFunc("increase");
          }}
        >
          <AiOutlinePlus />
        </Button>
      </div>
    </div>
  );
};

export default AddToCardQty;
