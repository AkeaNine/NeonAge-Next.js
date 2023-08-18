import GetProductCategories from "@/hooks/ProductCategories";
import React from "react";
import Accordian from "./components/Accordian";
import Link from "next/link";

type Category = {
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: string;
  name: string;
  link: string;
};

const MoreCategories = async () => {
  const categoriesFromDatabase = await GetProductCategories();
  console.log(categoriesFromDatabase);

  const categoriesChunks = [];
  const chunkSize = 5;

  for (let i = 0; i < categoriesFromDatabase.length; i += chunkSize) {
    const chunk = categoriesFromDatabase.slice(i, i + chunkSize);
    categoriesChunks.push(chunk);
  }
  return (
    <Accordian>
      <div className="w-full flex justify-between md:justify-around flex-wrap">
        {categoriesChunks.map((chunk, index) => (
          <div key={index} className="m-5 flex flex-col space-y-2">
            {chunk.map((category: Category, categoryIndex: number) => (
              <Link
                key={categoryIndex}
                className=" hover:underline"
                href={`/categories/${category.link}`}
              >
                <p className="text-sm md:text-md lg:text-base">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Accordian>
  );
};

export default MoreCategories;
