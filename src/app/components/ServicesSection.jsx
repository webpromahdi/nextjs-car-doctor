import dbConnect, { collectionsNameObj } from "@/lib/dbconnect";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = async () => {
  const serviceCollection = dbConnect(collectionsNameObj.ServicesCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12">
      {data.map((item) => (
        <div
          key={item.service_id}
          className="flex items-center justify-center p-4 col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300 border-2 border-[#E8E8E8] p-4">
            {/* Image Container */}
            <div className="relative w-full h-48 bg-gray-200">
              <Image
                src={item.img}
                alt="image"
                width={314}
                height={208}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Electrical System
              </h2>

              {/* Price and Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#FF3811]font-semibold text-lg">
                    Price :
                  </span>
                  <span className="text-[#FF3811] font-bold text-xl">
                    $20.00
                  </span>
                </div>
                <Link
                  href={`/services/${item._id}`}
                  className="text-[#FF3811] hover:text-red-700 transition-colors p-2"
                >
                  <ChevronRight size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
