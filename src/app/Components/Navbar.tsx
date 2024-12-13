"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  return (
    <section className="relative w-full h-20 flex justify-between items-center px-6 border-b overflow-hidden">
      {/* Header with Title and icons */}
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-10 bg-primary rounded-md flex justify-center items-center">
          <FaShoppingBag className="text-white text-lg" aria-hidden={true} />
        </div>

        <h1 className="font-semibold text-2xl max-md:hidden">
          Sales <span className="font-normal text-primary">Flow</span>
        </h1>
      </header>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 max-sm:w-[250px] relative">
          <Input placeholder="search..." className="h-10 rounded-lg" />
          <div className="absolute right-[4px] h-[31px]">
            <Button className="h-8">
              <IoIosAdd className="text-3xl" />
            </Button>
          </div>
        </div>

        <ModeToggle />
      </div>
    </section>
  );
};

export default Navbar;
