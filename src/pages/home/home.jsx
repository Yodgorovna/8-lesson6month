import React from "react";
import { Category } from "../../components/category";
import { categories } from "../../data/categories";
import { Product } from "../../components/product";
import { products } from "../../data/products";
import { Brend } from "../../components/brend";

export const Home = () => {
  return (
    <div>
      {/* <section className="container pb-[50px] rounded-[50px]">
        <Bunnor />
      </section> */}
      <section className="container">
        <h1 className="font-[500px] text-[28px] mb-[25px]">Kategoriyalar</h1>
        <div className="container flex justify-between mb-[20px]">
          {categories.map((item) => (
            <Category key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px]">
          Batafsil
        </p>
      </section>
      <section className="container pb-[60px] mx-auto">
        <h1 className="font-[500px] text-[28px] mb-[18px]">
          Eng ko’p sotilgan
        </h1>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko’proq ko’rish
        </p>
      </section>
      {/* <section className="container pb-[60px] mx-auto">
        <BunnorBotom />
      </section> */}
      <section className="container pb-[60px] mx-auto">
        <h1 className="font-[500px] text-[28px] mb-[18px]">Eng ommabop</h1>
        <div className="flex flex-wrap justify-between gap-[20px]">
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko’proq ko’rish
        </p>
      </section>
      <section className="container pb-[60px] mx-auto">
        <Brend />
      </section>
      {/* <section className="container pb-[60px] mx-auto">
        <BunnorBotom />
      </section> */}
    </div>
  );
};
