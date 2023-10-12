import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AddToCartSecProps {
  sfs: [
    {
      size: string;
      _key: string;
      stock: number;
    }
  ];
  size: string | string[] | undefined;
}

const AddToCartSec = ({ sfs, size }: AddToCartSecProps) => {
  const { toast } = useToast();
  const [qty, setQty] = useState(1);

  const [currentSFS, setCurrentSFS] = useState<number>();
  useEffect(() => {
    sfs.map((i) => {
      if (i.size === size) {
        setCurrentSFS(i.stock);
      }
    });
    setQty(1);
  }, [size]);

  function QtyClickHandler(term: string) {
    if (term === "decrease") {
      if (qty > 1) {
        setQty(qty - 1);
      } else {
        setQty(1);
      }
    }
    if (term === "increase") {
      if (currentSFS !== undefined) {
        if (qty < currentSFS && qty < 15) {
          setQty(qty + 1);
        } else {
          setQty(qty);
          toast({
            variant: "default",
            description: "Add to cart limit reached for this product.",
          });
        }
      }
    }
  }
  return (
    <div>
      <div>
        <p>Quantity:</p>
        <div className="my-2 flex max-w-[200px]">
          <Button
            className="bg-white text-black border border-black hover:bg-slate-200 rounded-none"
            onClick={() => {
              QtyClickHandler("decrease");
            }}
          >
            <AiOutlinePlus />
          </Button>
          <Input
            className="border border-black border-l-0 border-r-0 rounded-none text-center text-base"
            value={qty}
          />
          <Button
            className="bg-white text-black border border-black hover:bg-slate-200 rounded-none"
            onClick={() => {
              QtyClickHandler("increase");
            }}
          >
            <AiOutlineMinus />
          </Button>
        </div>
        <div className="my-2 max-w-[400px]">
          <Button className="w-full h-12 text-base">ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSec;
