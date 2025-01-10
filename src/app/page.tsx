import Link from 'next/link';

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

export default function Home() {
  const randomInt = getRandomInt();

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 opacity-50 rounded-lg"></div>

      <h1 className="text-5xl font-bold text-center text-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
        Welcome to the Beautiful World of Cambodia!
      </h1>
      <p className="text-xl text-center text-opacity-90 font-medium animate__animated animate__fadeIn animate__delay-2s">
        Explore the wonders, culture, and people of Cambodia with us!
      </p>

      <Link
        href={`/${randomInt}`}
        className="mt-8 border-2 border-white rounded-lg p-4 text-2xl font-semibold hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300 transform hover:scale-105 shadow-lg animate__animated animate__fadeIn animate__delay-3s"
      >
        Go To Page: {randomInt}
      </Link>
    </div>
  );
}
