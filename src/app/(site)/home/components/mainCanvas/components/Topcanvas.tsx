import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Topcanvas = () => {
  return (
    <div>
      <AspectRatio ratio={16 / 8}>
        <Image src="" alt="" fill className="rounded-md object-cover" />
      </AspectRatio>
    </div>
  );
};

export default Topcanvas;
