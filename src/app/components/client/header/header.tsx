"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClosedCaption, MenuIcon, Search, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 10) {
        // Sudah scroll sedikit → munculkan
        header.classList.remove("-translate-y-full");
        header.classList.add("translate-y-0");
      } else {
        // Masih di atas → sembunyikan
        header.classList.remove("translate-y-0");
        header.classList.add("-translate-y-full");
      }
    };

    window.addEventListener("scroll", updateHeaderVisibility);
    return () => window.removeEventListener("scroll", updateHeaderVisibility);
  }, []);

  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 w-full transform -translate-y-full transition-transform duration-300 bg-white shadow"
    >
      <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 items-center px-4 md:px-6 lg:px-8 mx-auto">
        {/* Logo */}
        <div className="lg:col-span-3 flex items-center">
          <Link
            href="/"
            aria-label="Baturan Trip Logo"
            className="inline-flex items-center space-x-2 focus:outline-none focus:opacity-80"
          >
            <Image
              src="/logo/logo-no-bg.png"
              alt="Logo Baturan Trip"
              className="h-20 w-20 md:h-25 sm:w-25 rounded-xl"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          {/* Search Dialog */}
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Search />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Cari Kota atau Kabupaten</DialogTitle>
                  <DialogDescription>
                    Masukkan nama kota atau kabupaten yang ingin kamu cari.
                    Tekan tombol cari untuk melanjutkan.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="search-city">Nama Kota/Kabupaten</Label>
                    <Input
                      id="search-city"
                      name="city"
                      placeholder="Contoh: Bandung"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Batal</Button>
                  </DialogClose>
                  <Button type="submit">Cari</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>

          {/* Cart Dialog */}
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <ShoppingCart />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Lihat Pesanan Anda</DialogTitle>
                  <DialogDescription>
                    Masukkan nomor telepon untuk melihat pesanan Anda.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="phone-number">Nomor Telepon</Label>
                    <Input
                      id="phone-number"
                      name="phone"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Batal</Button>
                  </DialogClose>
                  <Button type="submit">Lihat</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>

          {/* Sign In Button */}
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-400 text-black hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition"
          >
            Sign in
          </button>

          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-pro-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-pro-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-pro-hcail"
            >
                <MenuIcon className="hs-collapse-open:hidden shrink-0 size-4"/>
                <X className="hs-collapse-open:block hidden shrink-0 size-4"/>
             
              
            </button>
          </div>
        </div>

        {/* Collapse */}
        <div
          id="hs-pro-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
          aria-labelledby="hs-pro-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            <div>
              <Link
                className="relative inline-block text-blue-600 focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-300"
                href="#"
                aria-current="page"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-blue-600 hover:text-blue-300 focus:outline-hidden focus:text-blue-300"
                href="#"
              >
                Listings
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-blue-600 hover:text-blue-300 focus:outline-hidden focus:text-blue-300"
                href="#"
              >
                Product
              </Link>
            </div>
            <div>
              <Link
                className="inline-block text-blue-600 hover:text-blue-300 focus:outline-hidden focus:text-blue-300"
                href="#"
              >
                Checkout
              </Link>
            </div>
            
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
}
