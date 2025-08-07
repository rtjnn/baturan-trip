import Image from "next/image";
import Link from "next/link";

export default function Kota() {
  return (
//   {/* Card Blog */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    {/* Card */}
    <Link className="group block rounded-xl overflow-hidden focus:outline-hidden" href="kota/bandung">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image width={1000} height={1000} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/kota/bandung.png" alt="Blog Image" />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            Bandung
          </h3>
          <p className="mt-3 text-gray-600">
            Nikmati keindahan alam dan budaya kota Bandung yang kaya dengan wisata alam, kuliner, dan sejarahnya.
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
           Lihat lebih lanjut
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </Link>
    {/* End Card */}

    {/* Card */}
    <Link className="group block rounded-xl overflow-hidden focus:outline-hidden" href="kota/yogyakarta">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image width={1000} height={1000} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/kota/dieng.png" alt="Blog Image" />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            Dieng
          </h3>
          <p className="mt-3 text-gray-600">
            Jelajahi keindahan alam Dieng dengan kawah, telaga, dan budaya uniknya yang memukau.
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Lihat lebih lanjut
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </Link>
    {/* End Card */}

    {/* Card */}
    <Link className="group block rounded-xl overflow-hidden focus:outline-hidden" href="#">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image width={1000} height={1000} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/kota/jakarta.png" alt="Blog Image" />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            Jakarta
          </h3>
          <p className="mt-3 text-gray-600">
            Temukan pesona kota Jakarta dengan berbagai atraksi, budaya, dan kehidupan malam yang dinamis.
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Lihat lebih lanjut
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </Link>
    {/* End Card */}

    {/* Card */}
    <Link className="group block rounded-xl overflow-hidden focus:outline-hidden disabled" href="#" aria-disabled>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image width={1000} height={1000} className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="/kota/yogyakarta.png" alt="Blog Image" />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
           Yogyakarta
          </h3>
          <p className="mt-3 text-gray-600">
            Temukan keindahan budaya dan sejarah Yogyakarta dengan candi-candi megah dan seni tradisionalnya.
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
            Lihat lebih lanjut
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </Link>
    {/* End Card */}
  </div>
  {/* End Grid */}
</div>
// {/* End Card Blog */}
  );
}