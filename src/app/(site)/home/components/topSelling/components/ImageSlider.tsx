import GetTopSellingImages from "@/hooks/TopSellingImages";
import ImageModal from "./Image";

type Image = {
  image: {};
};

const ImageSlider = async () => {
  const imageData = await GetTopSellingImages();
  const images = imageData[0].images;

  return (
    <div className="w-full h-full lg:p-16 bg-[#313c4b8a] rounded-md">
      <div className="w-full h-full overflow-hidden">
      <div className="flex w-[300%] h-full ">
        {images.map((image: Image, index: number) => (
          <div
            key={index}
            className="w-2/6 h-full transition-transform duration-1500 transform animate-slide"
          >
            <ImageModal image={image} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
