import { CalendarClock, DollarSignIcon, FileVideoCamera, Speech } from "lucide-react";

export default function Benefit() {
  return (
    // {/* Icon Blocks */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">
        Apa yang Didapat dari Open Trip Kami
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-1 before:bg-linear-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <DollarSignIcon className="shrink-0 size-6 text-blue-600" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">Harga Murah</h3>
            <p className="mt-1 text-gray-600">
              Responsive, and mobile-first project on the web
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-1 before:bg-linear-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <Speech className="shrink-0 size-6 text-blue-600" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">Tour Guide</h3>
            <p className="mt-1 text-gray-600">
              Pemandu wisata berpengalaman dan ramah
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-1 before:bg-linear-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <FileVideoCamera className="shrink-0 size-6 text-blue-600" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Dokumentasi Profesional
            </h3>
            <p className="mt-1 text-gray-600">
              Foto dan video dokumentasi kualitas tinggi
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div>
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-1 before:bg-linear-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <CalendarClock className="shrink-0 size-6 text-blue-600"/>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="mt-1 text-gray-600">
              Dapat Hubungi kami kapan saja, 24 jam sehari
            </p>
          </div>
        </div>
        {/* End Icon Block */}
      </div>
    </div>
    // {/* End Icon Blocks */}
  );
}
