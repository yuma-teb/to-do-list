import Link from 'next/link';

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
export default function Home() {
  const randomInt = getRandomInt();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello</h1>
      <Link href={`/${randomInt}`} className="border-2 border-white p-2">
        Go To Page: {randomInt}
      </Link>
    </div>
  );
}
