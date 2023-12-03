import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import AddToCardButton from "./AddToCardButton";
import AddToCardQty from "./AddToCardQty";

interface AddToCartSecProps {
  id: string;
  title: string;
  sfs: [
    {
      size: string;
      _key: string;
      stock: number;
    }
  ];
  size: string | string[] | undefined;
  color: string | string[] | undefined;
}

const AddToCartSec = ({ sfs, size, color, id, title}: AddToCartSecProps) => {
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
  }, [size, color]);

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
      <AddToCardQty qty={qty} seQtyFunc={QtyClickHandler} />
      <AddToCardButton id={id} qty={qty} size={size} color={color} title={title} />
    </div>
  );
};

export default AddToCartSec;
