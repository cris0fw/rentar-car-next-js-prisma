import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Muchas gracias por confiar en nosotros</h1>
          <p>
            En breves momentos recibiras toda la informacion en tu correo
            electronico
          </p>
          <p>
            Podes visualizar todas tus reservas dentro de tu area de cliente
          </p>
          <Link href="/">
            <Button>Volver a ver los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
