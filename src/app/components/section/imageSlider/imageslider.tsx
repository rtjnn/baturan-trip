"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/image-slider/1.jpg", caption: "SUKAWARNA, CISARUA, BANDUNG" },
  { src: "/image-slider/2.jpg", caption: "CURUG GOLOSOR, BANDUNG" },
  { src: "/image-slider/1.jpg", caption: "TANGKUBAN PERAHU" },
  // tambahkan sampai 10 gambar
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // setiap 6 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.caption}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {img.caption}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
