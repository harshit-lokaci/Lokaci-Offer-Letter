"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      {/* Error Icon */}
      <div className="text-indigo-600 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 mx-auto animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>

      {/* Error Text */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4 text-center">
        Oops! Something went wrong
      </h1>
      <p className="text-blue-700 mb-8 text-center max-w-md leading-relaxed">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 rounded-lg bg-white text-blue-700 border border-blue-200 font-semibold shadow-sm hover:bg-blue-50 hover:shadow transition-all duration-300 text-center"
        >
          Go Home
        </Link>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-gray-500 text-center">
        If this issue persists, please{" "}
        <a
          href="mailto:support@lokaci.com"
          className="text-blue-700 hover:underline"
        >
          contact support
        </a>
        .
      </p>
    </div>
  );
}
