import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ColorSizeCompProps {
  sfs: [
    {
      size: string;
      _key: string;
      stock: number;
    }
  ];
  color: string | string[] | undefined;
  size: string | string[] | undefined;
  colors: string[];
}

const ColorSizeComp = ({ color, colors, size, sfs }: ColorSizeCompProps) => {
  const router = useRouter();
  // console.log(colors);
  // console.log(sfs);

  useEffect(() => {
    router.replace(`?color=${color}&size=${size}`, { scroll: false });
  }, [size, color])
  
  function handleColorClick(color: string) {
    router.replace(`?color=${color}&size=${size}`, { scroll: false });
  }
  function handleSizeClick(size: string) {
    router.replace(`?color=${color}&size=${size}`, { scroll: false });
  }

  return (
    <div className="w-full my-2">
      <div className="w-full mb-2">
        <p className="text-sm font-semibold mb-1">Colors:&nbsp;</p>
        <div className="flex justify-start flex-wrap">
        {colors.map((i, index) => (
          <div className="p-1 m-1 bg-slate-300" key={index}>
            <div
            className={`py-1 px-2 cursor-pointer border border-black ${
              color === i ? "bg-gray-700 text-white" : "bg-slate-200"
            }`}
            onClick={() => handleColorClick(i)}
          >
            <p className="text-base select-none">{i}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm font-semibold mb-1">Sizes:&nbsp;</p>
        <div className=" flex items-center flex-wrap">
        {sfs.map((i, index) => (
           <div className="p-1 m-1 bg-slate-300" key={index}>
             <div
            className={`py-1 px-2 cursor-pointer border border-black ${
              size === i.size ? "bg-gray-700 text-white" : "bg-slate-200"
            }`}
            onClick={() => handleSizeClick(i.size)}
          >
            <p className="text-base select-none">{i.size}</p>
          </div>
           </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSizeComp;
