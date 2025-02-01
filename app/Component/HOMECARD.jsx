import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function HOMECARD() {
  return (
    <div className="bg-green-100 relative w-[50vw] h-[80vh] mx-auto flex flex-row-reverse items-center">
      <div className="bg-lime-400 w-fit p-6 absolute top-1/2 -translate-y-1/2 -left-1/4">
        <div className="flex">
          <FaShareAlt className="text-slate-200 text-3xl font-bold" />
          <FaRegHeart className="text-slate-200 text-3xl font-bold ms-auto me-19 my-2" />
        </div>
        <Image src={"/pngegg.png"} alt="" width={370} height={370} />
      </div>

      <div className="w-1/2 text-slate-500">
        <h1 className="text-slate-950 text-2xl font-bold ">Delicious Apples</h1>
        <h1 className="text-slate-500 mb-4">COD:45999</h1>
        <h4 className="text-red-600 font-thin">
          R$ <span className="text-5xl font-light">7.93</span>
        </h4>
        <h1> SELECT A COLOUR</h1>

        <div className="flex gap-3">
          <Image src={"/pngegg.png"} alt="" width={50} height={50} />
          <Image src={"/pngegg.png"} alt="" width={50} height={50} />
          <Image src={"/pngegg.png"} alt="" width={50} height={50} />
          <Image src={"/pngegg.png"} alt="" width={50} height={50} />
        </div>
        <div className="my-8">
          <h1>BENEFITS</h1>
          <div className="text-slate-950 my-3 space-y-1 text-sm font-normal mb-6">
            <li>Apples are nutricious</li>
            <li>Apples may be good for weight loss</li>
            <li>Apples may be good for bone health</li>
            <li>Theyre Linked to a lowest risk of diabetes</li>
          </div>
          <div className="shadow-xl  bg-red-600 px-6 py-3 w-fit">
            <button className="text-slate-200 font-bold">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
