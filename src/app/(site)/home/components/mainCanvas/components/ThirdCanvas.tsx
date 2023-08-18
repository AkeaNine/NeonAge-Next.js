import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
const ThirdCanvas = () => {
  return (
    <div>
      <AspectRatio ratio={4 / 3}>
        <Image src="" alt="" fill className="rounded-md object-cover" />
      </AspectRatio>
    </div>
  );
};

export default ThirdCanvas;
