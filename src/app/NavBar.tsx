import React from "react";
import Image from "next/image";
import logo from "@/assets/logo2.png";
import Link from "next/link";
import { getCart } from "@/wix-api/cart";



const NavBar = async () => {
  const cart = await getCart();
  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto p-5 flex items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={200} height={200} />
          <span className="text-xl font-bold">Maravilla Casual</span>
        </Link>
        {totalQuantity} Items in your cart
      </div>
    </header>
  );
};

export default NavBar;
