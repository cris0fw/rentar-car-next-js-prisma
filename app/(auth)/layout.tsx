import Image from "next/image";
import React from "react";

const layoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center">{children}</div>
      <div className="hidden lg:flex lg:bg-red-700 h-full justify-center items-center lg:flex-col">
        <Image
          src="/logo.svg"
          width={200}
          height={200}
          sizes="300"
          alt="logo"
        />
        <h1 className="text-xl font-bold mt-2 text-[#F15757]">
          Inicia session ahora!
        </h1>
      </div>
    </div>
  );
};

export default layoutAuth;
