"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";

export default function NavBar() {
  const { state, dispatch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeSegment = pathname === "/" ? null : pathname.split("/")[1];

  const calculateTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const links = [
    { href: "/", label: "Home", segment: null },
    { href: "/headphones", label: "Headphone", segment: "headphones" },
    { href: "/speakers", label: "Speakers", segment: "speakers" },
    { href: "/earphones", label: "Earphones", segment: "earphones" },
  ];

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center bg-black text-white py-8 px-4 md:px-8 xl:border-b border-gray-100 xl:w-1/2 mx-auto">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <ul
          className={`${
            isMobileMenuOpen ? "grid" : "hidden"
          } absolute md:relative translate-y-28 md:translate-y-0 ease-in-out right-0 text-center left-0 w-full md:w-auto bg-black md:bg-transparent md:flex md:items-center gap-x-8 p-4 md:p-0 z-10`}
        >
          {links.map((link) => (
            <li key={link.href} className="my-2 md:my-0">
              <Link
                href={link.href}
                className={`block md:inline ${
                  activeSegment === link.segment
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[60%] bg-white rounded-xl p-6 shadow-lg overflow-hidden">
              <div>
                <DialogHeader className="flex flex-row items-center justify-between">
                  <DialogTitle className="text-xl font-bold">
                    Your Cart ({state.items.length})
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {state.items.length === 0 ? (
                    <p className="text-gray-500 text-center">
                      Your cart is empty.
                    </p>
                  ) : (
                    state.items.map((item) => (
                      <div
                        key={item.slug}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.image.thumbnail}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-lg"
                          />
                          <div className="flex flex-col">
                            <p className="font-medium text-gray-800">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                payload: {
                                  slug: item.slug,
                                  quantity: item.quantity - 1,
                                },
                              })
                            }
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                payload: {
                                  slug: item.slug,
                                  quantity: item.quantity + 1,
                                },
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="font-semibold text-gray-800">
                          R{item.price * item.quantity}
                        </p>
                        <Trash2
                          className="w-4 h-4 text-red-500 hover:text-red-600 cursor-pointer"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: { slug: item.slug },
                            })
                          }
                        />
                      </div>
                    ))
                  )}
                </div>

                {state.items.length > 0 && (
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>R{calculateTotal()}</span>
                    </div>
                  </div>
                )}

                <DialogFooter className="mt-6 flex sm:justify-between items-center w-full">
                  <button
                    className="text-sm font-semibold text-red-500 underline"
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                  >
                    Clear All
                  </button>
                  <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all">
                    CHECKOUT
                  </button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
