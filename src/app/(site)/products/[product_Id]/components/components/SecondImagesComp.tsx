import Image from "next/image";

interface SecondImagesCompProps {
  secondImages: any[];
  handleClick: (index: number) => void
}

const SecondImagesComp = ({ secondImages, handleClick }: SecondImagesCompProps) => {
  return (
    <div className="h-full w-auto flex justify-start space-x-2 py-2">
              {secondImages.map((i, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className="h-full min-w-fit p-2 bg-slate-200 rounded-sm cursor-pointer"
                >
                  <Image
                    src={i.props.src}
                    width={200}
                    height={300}
                    alt={""}
                    className="h-full w-auto object-cover"
                  />
                </div>
              ))}
            </div>
  );
};

export default SecondImagesComp;
