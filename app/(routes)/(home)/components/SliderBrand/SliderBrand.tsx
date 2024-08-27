"use client";
import React from "react";
import Image from "next/image";
import AutPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { dataBrands } from "./SliderBrand.types";
import Reveal from "@/components/shared/reveal/Reveal";

const SliderBrand = () => {
  return (
    <Reveal
      position="bottom"
      className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          AutPlay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className="basis-4/5 md:basis-2/4 lg:basis-1/6"
            >
              <Image
                src={`/image/brand/${url}`}
                alt="Brand"
                width={90}
                height={90}
                className="object-contain aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
};

export default SliderBrand;
