"use client";

import QuizApp_Week9 from '../../components/QuizApp_Week9';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <main className="min-h-screen p-8">
      <Link 
        href="/" 
        className="inline-block mb-4 text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Home
      </Link>
      <QuizApp_Week9 />
    </main>
  );
}
