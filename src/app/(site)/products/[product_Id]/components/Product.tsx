import MainProductSection from "./components/MainProductSection";

interface ProductProps {
  product: {
    _id: string;
    price: number;
    sku: string;
    title: string;
    category: [];
    tags: [];
    colors: [
      {
        _key: string,
        dp: [
          {
            _type: string;
            asset: {
              _ref: string;
              _type: string;
            };
          }
        ];
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

const Product = async ({ product, searchParams }: ProductProps) => {
  // console.log(product);

  const enteredColor = searchParams.color;
  const enteredSize = searchParams.size;
  const getrColors = (x: any) => {
    const colors = [];
    for (const item of product.colors) {
      colors.push(item.color);
    }
    return colors;
  };

  const colors = getrColors(product) || [];

  const colorGetterFunc = (x: string | string[]) => {
    for (const item of product.colors) {
      if (item.color === x) {
        return item;
      }
    }
  };

  const selectedColor = ColorSetter(enteredColor);
  const colorObj = colorGetterFunc(selectedColor) || product.colors[0];
  const selectedSize = SizeSetter(enteredSize);

  function ColorSetter(color: string | string[] | undefined = "") {
    if (color === null || color === undefined || color === "") {
      return product.colors[0].color;
    }
    for (const item of product.colors) {
      if (item.color === color) {
        return color;
      }
    }
    return product.colors[0].color;
  }

  function SizeSetter(size: string | string[] | undefined = "") {
    if (size === null || size === undefined || size === "") {
      return colorObj.sfs[0].size;
    } else {
      for (const i of colorObj.sfs) {
        if (i.size === size) {
          return size;
        }
      }
      return colorObj.sfs[0].size;
    }
  }

  return (
    <div className="w-full">
      <MainProductSection
        // product={product}
        id={product._id}
        description={product.description}
        discount={product.discount}
        price={product.price}
        sku={product.sku}
        title={product.title}
        colorObj={colorObj}
        colors={colors}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
      <div>{/* similar products */}</div>
      <div>{/* Q&A */}</div>
    </div>
  );
};

export default Product;
