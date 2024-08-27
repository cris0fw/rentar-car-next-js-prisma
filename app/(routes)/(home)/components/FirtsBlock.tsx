import Reveal from "@/components/shared/reveal/Reveal";
import Image from "next/image";
import React from "react";

const FirtsBlock = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0">
      <Reveal position="bottom" className="p-6 lg:pl-40 h-[400px]">
        <h1 className="text-6xl md:text-[70px] font-bold">
          Premium <span className="block">Rentar Cars</span>in spain
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Dont deny yourself pleasure of driving the best premium cars from
          around the world here and now
        </p>
      </Reveal>
      <Reveal
        position="right"
        className="flex mt-[50px] justify-start items-end"
      >
        <Image
          src="/image/lambo.png"
          alt="rent car"
          width={630}
          height={630}
          priority
        />
      </Reveal>
    </div>
  );
};

export default FirtsBlock;
