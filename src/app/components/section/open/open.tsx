import { createClient } from "@/utils/supabase/server";
import { Calendar, User } from "lucide-react";

export default async function OpenTrip() {
  const supabase = await createClient();
  const { data: trip, error } = await supabase.from("trip").select("*");

  if (error) {
    console.error("Gagal mengambil data trip:", error.message);
  }

  // Filter hanya yang status = 1
  const tripAktif = trip?.filter((t) => t.status === 1) || [];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Open Trip
        </h2>
        <p className="mt-1 text-gray-600">
          Bergabunglah dengan open trip kami untuk pengalaman wisata yang tak
          terlupakan. Temukan keindahan alam dan budaya bersama teman baru dalam
          perjalanan yang menyenangkan.
        </p>
      </div>

      {tripAktif.length > 0 ? (
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tripAktif.map((t) => {
            let dateObj: Date | null = null;
            if (t.tanggal) {
              const [year, month, day] = t.tanggal.split("-").map(Number);
              dateObj = new Date(year, month - 1, day);
            }

            return (
              <div
                key={t.trip_id}
                className="relative w-72 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Background Gambar */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(/trip/${t.gambar})`,
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                {/* Konten */}
                <div className="relative p-6 flex flex-col h-full text-white">
                  <h4 className="font-bold text-lg">
                    {t.wisata.length > 20
                      ? t.wisata.slice(0, 20) + "..."
                      : t.wisata}
                  </h4>

                  {/* Tanggal */}
                  {dateObj && (
                    <div className="flex items-center gap-2 mt-2 text-sm opacity-90">
                      <Calendar className="size-4" />
                      <span>
                        {dateObj.toLocaleDateString("id-ID", {
                          weekday: "long",
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}

                  {/* Kuota */}
                  <div className="flex items-center gap-2 mt-1 text-sm opacity-90">
                    <User className="size-4" />
                    <span>
                      Sisa {t.jumlah - t.total_ikut} / {t.jumlah} orang
                    </span>
                  </div>

                  {/* Tombol */}
                  <a
                    href={`/trip/${t.trip_id}`}
                    className="mt-auto inline-block text-center bg-white text-gray-900 font-normal text-sm py-1 px-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Lihat Trip
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          Open trip belum tersedia
        </p>
      )}
    </div>
  );
}
