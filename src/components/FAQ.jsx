import React from "react";

export const FAQ = () => {
  return (
    <div className="py-7">
      <h1 className="text-5xl font-semibold py-3">FAQ</h1>

      <div className="mt-8 space-y-6 max-w-3xl">
        <details className="bg-white py-3 ">
          <summary className="flex cursor-pointer justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
              What does dream interpretation mean?
            </h3>

            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </summary>
          <p className="mt-2 text-gray-600">
            Dream interpretation is the process of assigning meaning to dreams.
            It aims to understand the symbols and themes in dreams to provide
            insights into one's thoughts and feelings.
          </p>
        </details>
      </div>
    </div>
  );
};
