import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const BeforeChorkiBlock = () => {
  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-2/4">
          <AspectRatio ratio={4 / 4}>
            <Link href={""}>
              <Image
                src=""
                alt="Discounts"
                className="rounded-sm object-cover"
              />
            </Link>
          </AspectRatio>
        </div>
        <div className="w-2/4">
          <AspectRatio ratio={4 / 4}>
            <Link href={""}>
              <Image
                src=""
                alt="Trending"
                className="rounded-sm object-cover"
              />
            </Link>
          </AspectRatio>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-2/4">
          <AspectRatio ratio={4 / 4}>
            <Link href={""}>
              <Image
                src=""
                alt="Kids Fashion"
                className="rounded-sm object-cover"
              />
            </Link>
          </AspectRatio>
        </div>
        <div className="w-2/4">
          <AspectRatio ratio={4 / 4}>
            <Link href={""}>
              <Image
                src=""
                alt="Anime Collection"
                className="rounded-sm object-cover"
              />
            </Link>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default BeforeChorkiBlock;
