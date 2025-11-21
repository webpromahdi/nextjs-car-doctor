import dbConnect, { collectionsNameObj } from "@/lib/dbconnect";
import { ChevronRight } from "lucide-react";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionsNameObj.ServicesCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="w-[80%] m-auto">
      <section className="flex justify-center">
        <figure className=" relative w-full h-[300px]">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            fill
            className="object-cover rounded-lg"
            alt="banner"
          />
          <div className="overlay-bg absolute w-full h-full top-0 z-10 rounded-lg">
            <div className="w-full h-full flex items-center">
              <h1 className="text-white text-4xl font-bold ps-16 relative z-20">
                Service Details
              </h1>
            </div>
          </div>
        </figure>
      </section>

      <section className="mt-20 grid grid-cols-3 gap-2 ">
        {/* post details */}
        <div className="col-span-2">
          <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
            <Image
              src={data.img}
              alt={data.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4">{data.title}</h1>
          <p className="mt-4">{data.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {data.facility?.map((item, index) => (
              <div
                key={index}
                className="px-8 py-5 border-t-2 border-t-[#FF3811] rounded-lg shadow-sm bg-[#F3F3F3]"
              >
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        {/* post details */}
        {/* sidebar */}
        <div className="col-span-1">
          <div className="bg-[#F3F3F3] flex flex-col p-5 rounded-lg gap-y-3">
            <h2 className="text-xl font-bold">Services</h2>
            <Link
              href={"/"}
              className="flex justify-between items-center bg-[#FF3811] text-white px-3 py-2 rounded-sm"
            >
              <span>Full Car Repair</span>
              <ChevronRight size={20} />
            </Link>
            <Link
              href={"/"}
              className="flex justify-between items-center bg-white px-3 py-2 rounded-sm"
            >
              <span>Engine Repair</span>
              <ChevronRight size={20} />
            </Link>
            <Link
              href={"/"}
              className="flex justify-between items-center bg-white px-3 py-2 rounded-sm"
            >
              <span>Automatic Services</span>
              <ChevronRight size={20} />
            </Link>
            <Link
              href={"/"}
              className="flex justify-between items-center bg-white px-3 py-2 rounded-sm"
            >
              <span>Engine Oil Change</span>
              <ChevronRight size={20} />
            </Link>
            <Link
              href={"/"}
              className="flex justify-between items-center bg-white px-3 py-2 rounded-sm"
            >
              <span>Battery Charge</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
        {/* sidebar */}
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
