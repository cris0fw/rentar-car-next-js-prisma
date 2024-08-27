import Reveal from "@/components/shared/reveal/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DriveToday = () => {
  return (
    <div className="p-6 lg:ly-32 max-w-7xl mx-auto">
      <div className="bg-[url('/image/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-white">Drive Your dream car today</h3>
            <p className="text-white text-xl my-5">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Register here
              </Button>
            </Link>
          </div>
          <Reveal position="bottom" className="lg:absolute lg:-right-24 top-5">
            <Image
              src="/image/audi.png"
              alt="Car drive"
              width={500}
              height={230}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default DriveToday;
