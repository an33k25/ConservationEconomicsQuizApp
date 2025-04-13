"use client";

import QuizApp_Week1 from '../../components/QuizApp_Week1';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <main className="min-h-screen p-8">
      <Link 
        href="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
      <QuizApp_Week1 />
    </main>
  );
}
