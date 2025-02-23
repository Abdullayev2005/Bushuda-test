import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center text-center">
        <h1 className="mt-50 text-5xl font-extrabold mb-4">
        BushidoWords bilan Japon tilini <span className="text-yellow-400">o'rganish </span><br/> platformasiga xush kelibsiz
        </h1>
        <p className="text-lg text-gray-200 max-w-lg">
          O'ylaymanki site sizga yoqadi men qo'limdan kelgancha sizga yordam beraman
          biz bosqichma bosqich rivojlanmoqdamiz bizga qo'shiling va bizni tark etmang yangiliklar hali oldinda
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
  <button 
    onClick={() => window.location.href = "https://fabulous-duckanoo-ce5ca4.netlify.app/"}
    className="mt-6 px-4 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition w-40 sm:w-48"
  >
    So'z yodlash
  </button>
  <button 
    onClick={() => window.location.href = "https://kanji-japan.netlify.app/"}
    className="mt-6 px-4 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition w-40 sm:w-48"
  >
     Kanji mashqlari
  </button>
</div>


      </section>
    </div>
  );
}
