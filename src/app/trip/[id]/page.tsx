import { createClient } from "@/utils/supabase/server";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TripProps = {
  params: {
    id: string;
  };
};

export default async function TripDetail({ params }: TripProps) {
  const supabase = await createClient();

  // Ambil data trip berdasarkan trip_id
  const { data: trip, error } = await supabase
    .from("trip")
    .select("*")
    .eq("trip_id", params.id)
    .single();

  if (error || !trip) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-xl font-bold">Trip tidak ditemukan</h2>
        <p className="text-gray-600 mt-2">
          Pastikan Anda memilih trip yang benar.
        </p>
      </div>
    );
  }

  // Format tanggal
  let dateObj: Date | null = null;
  if (trip.tanggal) {
    const [year, month, day] = trip.tanggal.split("-").map(Number);
    dateObj = new Date(year, month - 1, day);
  }

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex items-center justify-center z-50 w-full bg-white border-b border-gray-200">
        <nav className="max-w-[85rem] w-full mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link
            className="flex items-center justify-center"
            href="/"
            aria-label="Brand"
          >
            <Image
              src="/logo/logo-no-bg.png"
              alt="Logo Baturan Trip"
              className="rounded-xl"
              width={100}
              height={100}
              priority
            />
          </Link>
        </nav>
      </header>

      {/* ========== END HEADER ========== */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Gambar Utama */}
        <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg mb-6">
          <img
            src={`/trip/${trip.gambar}`}
            alt={trip.wisata}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Judul & Info */}
        <h1 className="text-3xl font-bold mb-4">{trip.wisata}</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700 mb-6">
          {/* Tanggal */}
          {dateObj && (
            <div className="flex items-center gap-2">
              <Calendar className="size-5" />
              {dateObj.toLocaleDateString("id-ID", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
          )}
          {/* Kuota */}
          <div className="flex items-center gap-2">
            <User className="size-5" />
            Sisa {trip.jumlah - trip.total_ikut} / {trip.jumlah} orang
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-gray-600 leading-relaxed mb-8">
          {trip.deskripsi || "Tidak ada deskripsi untuk trip ini."}
        </p>

        <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium">
          {trip.harga
            ? `Rp ${trip.harga.toLocaleString("id-ID")} per orang`
            : "Tidak ada informasi harga untuk trip ini."}
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-4">
          <a
            href="/"
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
          >
            Kembali
          </a>
          <a
            href={`/trip/${trip.trip_id}/daftar`}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Daftar Trip
          </a>
        </div>
      </div>
    </>
  );
}
