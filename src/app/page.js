import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen p-8">
      <h1 className="text-4xl mt-10 font-bold mb-6">
        Welcome to the NPTEL Conservation Economics
      </h1>
      <div className="flex flex-wrap gap-4 mt-60">
        <Link
          href="/quiz"
          className="bg-blue-600  text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 1 Quiz
        </Link>
        <Link
          href="/week2"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 2 Quiz
        </Link>
        <Link
          href="/week3"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 3 Quiz
        </Link>

        <Link
          href="/week4"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 4 Quiz
        </Link>

        <Link
          href="/week5"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 5 Quiz
        </Link>

        <Link
          href="/week6"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 6 Quiz
        </Link>

        <Link
          href="/week7"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 7 Quiz
        </Link>

        <Link
          href="/week8"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 8 Quiz
        </Link>

        <Link
          href="/week9"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 9 Quiz
        </Link>

        <Link
          href="/week10"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 10 Quiz
        </Link>
        <Link
          href="/week11"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Week 11 Quiz
        </Link>
        <Link
        href="/week12"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Start Week 12 Quiz
      </Link>
      
      </div>
      <footer className="align-center mt-96 w-max">
      Developed by Aneek 
      </footer>
    </main>
    
  );
}
