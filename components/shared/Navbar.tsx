"use client";
import React from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Heart, User, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";

const Navbar = () => {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();
  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="Logo rentar car" width={50} height={50} />
          <span className="text-xl font-bold">Rentar Car</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">List Cars </Link>
          <Link href="/dashboard">Dashboard</Link>

          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-black"
                  } `}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Iniciar Session
                <User className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
