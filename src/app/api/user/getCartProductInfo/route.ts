import client from "@/hooks/Sanity";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, color } = await request.json();
  const sanitizedId = id.replace(/[^a-zA-Z0-9_-]/g, "");
  console.log(id, color);
  const colorQuery = `*[_type == "color" && name == $color]{_id}`;
  const colorRef = (await client.fetch(colorQuery, { color }))[0]._id;
  console.log(colorRef);

  const prodQuery = `*[_type == "product" && _id == $sanitizedId]{
            "dp": colors[@.color._ref == $colorRef]{dp}[0].dp,
            price,
            discount
        }`;
  const productInfo = (
    await client.fetch(prodQuery, { sanitizedId, colorRef })
  )[0];

  console.log(productInfo);
  const newPrice =
    productInfo.discount > 0
      ? Math.round(productInfo.price * (1 - productInfo.discount / 100))
      : productInfo.price;
  productInfo["price"] = newPrice;
  return NextResponse.json(productInfo);
}
