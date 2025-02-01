import Image from "next/image";
import React from "react";

export default function ProductCard() {
  return (
    <div className="box-content h-[500px] w-80 p-4 border-4 ml-96  bg-slate-600 ">
      <Image
        className="ml-14"
        src={"/png.findme.png"}
        alt=""
        width={200}
        height={200}
      />
      <h1 className=" font-bold text-center my-7 ml-1 ">G A R N I E R</h1>
      <h1 className="text-center">
        Garnier pure Active Micellar <br></br> Cleansing Water, 125ml
      </h1>
      <h4 className="font-light text-5xl text-center my-5 text-yellow-500">
        $15
      </h4>
      <div className="shadow-xl  bg-yellow-600  px-24 py-6">
        <button className="text-slate-200 font-bold text-center ">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
