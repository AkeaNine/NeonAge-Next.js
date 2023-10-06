import MainProductSection from "./components/MainProductSection";
import ProductImageSlider from "./components/ProductImageSlider";

interface ProductProps {
  product: {
    price: number;
    sku: string;
    title: string;
    categories: [];
    tags: [];
    colors: [
      {
        dp: [];
        sfs: [{ size: string; _key: string; stock: number }];
        images: [];
        color: string;
      }
    ];
    description: [];
    discount: number;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Product: React.FC<ProductProps> = ({ product, searchParams }) => {
  const enteredColor = searchParams.color;
  const enteredSize = searchParams.size;

  const selectedColor = ColorSetter(enteredColor);
  const selectedSize = SizeSetter(enteredSize, selectedColor);

  function ColorSetter(color: string | string[] | undefined = "") {
    var state = false;
    if (color === null || color === undefined || color === "") {
      return product.colors[0].color;
    }
    for (const item of product.colors) {
      if (item.color === color) {
        state = true;
        break;
      }
    }
    if (state) {
      return color;
    } else {
      return product.colors[0].color;
    }
  }

  function SizeSetter(size: string | string[] | undefined = "", color: string | string[]) {
    var finalizedSize: string | string[] | undefined = "";
    const colorGetterFunc = (x : string | string[]) => {
      for (const item of product.colors) {
        if (item.color === x) {
          return item;
        }
      }
    };
    const colorObj = colorGetterFunc(color);

    if (colorObj !== undefined) {
      if (size === null || size === undefined || size === "") {
        finalizedSize = colorObj.sfs[0].size;
        return finalizedSize;
      } else {
        for (const i of colorObj.sfs) {
          if (i.size === size) {
            finalizedSize = size;
            return finalizedSize;
          }
        }
        finalizedSize = colorObj.sfs[0].size;
        return finalizedSize;
      }
    }
  }

  return (
    <div className="w-full">
      <MainProductSection
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
      <div>{/* similar products */}</div>
      <div>{/* Q&A */}</div>
    </div>
  );
};

export default Product;
