export default function Feedback() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl">
            Masukan & Saran
          </h2>
          <p className="text-gray-600 mt-2">
            Berikan komentar, saran, atau masukan Anda agar kami dapat terus meningkatkan layanan dan menjadi lebih baik ke depannya.
          </p>
        </div>

        {/* Card */}
        <div className="mt-5 p-4 relative z-10 bg-white border border-gray-200 rounded-xl sm:mt-10 md:p-10">
          <form>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-name-1"
                className="block mb-2 text-sm font-medium"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="hs-feedback-post-comment-email-1"
                className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                Komentar / Saran
              </label>
              <div className="mt-1">
                <textarea
                  id="hs-feedback-post-comment-textarea-1"
                  name="hs-feedback-post-comment-textarea-1"
                  className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Tulis komentar atau saran Anda di sini..."
                ></textarea>
              </div>
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
}
