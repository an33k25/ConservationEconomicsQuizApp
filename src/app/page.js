import Link from "next/link";
import './globals.css'
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400', // Audiowide only supports 400
  variable: '--font-audiowide',
  display: 'swap',
})

export default function Home() {
  return (
    <main className=" min-h-screen  pt-24 px-20">
    <h1 className={`${audiowide.className} text-5xl text-blue-600 uppercase`}>NPTEL</h1> 
    <div className="flex items-start gap-5">
      <h1 className="text-4xl pt-5  pb-5 font-bold mb-6">Conservation Economics</h1>

      <Link href="https://github.com/an33k25/ConservationEconomicsQuizApp.git" className="flex items-center ml-auto " target="_blank">
      <svg class="h-8 w-8 text-stone-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
    </Link>
      </div>
      
      <ul class="mt-10 space-y-4">
  <li class="flex items-start gap-3">
    <svg class="h-8 w-8 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

    <span class="text-white text-xl">Comprehensive questions that address every facet of the NPTEL Conservation Economics curriculum</span>
  </li>

  <li class="flex items-start gap-3">
  <svg class="h-8 w-8 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
    <span class="text-white  text-xl">Questions based on your degree of expertise</span>
  </li>

  <li class="flex items-start gap-3">
  <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    <span class="text-white text-xl">Determine your weak points and strengthen them.</span>
  </li>
</ul>
      <div className="mt-24 text-xl mx-auto text-center font-bold">
      Start Your FAT Preparation Now
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        <Link
          href="/quiz"
          className="bg-blue-600   text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
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
        <Link
          href="/combined"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Combined All Weeks

          </Link>
      </div>
      <footer className="mt-12 mx-auto text-center">Excel in the NPTEL Conservation Economics course content and succeed in your FAT exam using the dedicated quiz application.  </footer>
      <div className="mt-4 flex gap-2">
      <footer className="mt-12 text-xs text-gray-600 ml-auto">Designed and Developed by Aneek</footer>
      <Link href="https://www.linkedin.com/in/aneek-kumar-saha-649236233/" className="" target="_blank">
      <svg class="h-5 w-5 text-gray-500 mt-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
      </Link>
      </div>
      </main>
    
    
  );
}
