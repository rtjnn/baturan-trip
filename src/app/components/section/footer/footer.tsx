import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    // {/* ========== FOOTER ========== */}
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="text-center">
        <div className="flex justify-center items-center">
          <Link
            className="text-xl font-semibold text-black"
            href="#"
            aria-label="Brand"
          >
            <Image
              src="/logo/logo-no-bg.png"
              alt="Baturan Trip"
              className="w-20 h-20 rounded-full"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* End Col */}

        <div className="mt-3">
          <p className="text-gray-500">
            Dibuat oleh{" "}
            <Link
              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="https://revicto.vercel.app/"
              target="_blank" // opsional, biar buka tab baru
              
            >
              Revicto
            </Link>
            , Web Developer.
          </p>
          <p className="text-gray-500">© 2025 Baturan Trip.</p>
        </div>

        {/* Social Brands */}
        <div className="mt-3 space-x-2">
          <Link
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <InstagramIcon  className="shrink-0 size-3.5"/>
            
          </Link>
          <Link
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <TwitterIcon  className="shrink-0 size-3.5"/>
          </Link>
          <Link
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <GithubIcon  className="shrink-0 size-3.5"/>
          </Link>
          <Link
            className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
           <FacebookIcon  className="shrink-0 size-3.5"/>
          </Link>
        </div>
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
    // {/* ========== END FOOTER ========== */}
  );
}
