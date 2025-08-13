import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Kota() {
  const supabase = await createClient();
  const { data: kota, error } = await supabase.from("kota").select("*");

  if (error) {
    console.error("Gagal mengambil data kota:", error.message);
  } else {
    console.log("Data kota berhasil diambil:", kota);
  }

  return (
    //   {/* Card Blog */}
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {/* Card */}
          {kota?.map((k) =>
            k.status === 1 ? (
              <Link
                key={k.kota_id}
                className="group block rounded-xl overflow-hidden focus:outline-hidden"
                href={`/kota/${k.nama}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <Image
                      width={1000}
                      height={1000}
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                      src={`/kota/${k.gambar}`}
                      alt="Blog Image"
                    />
                  </div>

                  <div className="grow">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                      {k.nama}
                    </h3>
                    <p className="mt-3 text-gray-600">{k.deskripsi}</p>
                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                      Lihat lebih lanjut
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={k.kota_id}
                className="opacity-50 pointer-events-none block rounded-xl overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <Image
                      width={1000}
                      height={1000}
                      className="size-full absolute top-0 start-0 object-cover rounded-xl"
                      src={`/kota/${k.gambar}`}
                      alt="Blog Image"
                    />
                  </div>

                  <div className="grow">
                    <h3 className="text-xl font-semibold text-gray-500">
                      {k.nama}
                    </h3>
                    <p className="mt-3 text-gray-400">{k.deskripsi}</p>
                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-gray-400 font-medium">
                      Tidak tersedia
                    </p>
                  </div>
                </div>
              </div>
            )
          )}

          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
}
