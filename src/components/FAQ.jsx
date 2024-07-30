import React from 'react'


export const FAQ = () => {
  return (
    <div className='py-7'>
      <h1 className='text-5xl font-semibold py-3'>FAQ</h1>




      <div class="mt-8 space-y-6 max-w-3xl">


        <details class="bg-white py-3 ">
          <summary className='flex cursor-pointer justify-between items-center'>
            <h3 class="text-xl font-semibold text-gray-800">What  dream interpretation?</h3>

            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>

          </summary>
          <p class="mt-2 text-gray-600">Dream interpretation is the process of assigning meaning to dreams. It aims to understand the symbols and themes in dreams to provide insights into one's thoughts and feelings.</p>
        </details>


        <div class="bg-white py-3 ">
          <h3 class="text-xl font-semibold text-gray-800">Why do we dream?</h3>
          <p class="mt-2 text-gray-600">Dreams are a natural part of sleep, and they can serve various psychological functions such as processing emotions, solving problems, and reflecting on experiences.</p>
        </div>
        <div class="bg-white py-3 ">
          <h3 class="text-xl font-semibold text-gray-800">Can dreams predict the future?</h3>
          <p class="mt-2 text-gray-600">While some believe that dreams can predict future events, most scientific research suggests that dreams are more likely to reflect our subconscious thoughts and experiences.</p>
        </div>
        <div class="bg-white py-3 ">
          <h3 class="text-xl font-semibold text-gray-800">How can I remember my dreams better?</h3>
          <p class="mt-2 text-gray-600">To improve dream recall, keep a dream journal by your bed and write down your dreams as soon as you wake up. Avoiding alcohol and getting enough sleep can also help.</p>
        </div>
        <div class="bg-white py-3 ">
          <h3 class="text-xl font-semibold text-gray-800">Do dreams have universal meanings?</h3>
          <p class="mt-2 text-gray-600">While some dream symbols may have common interpretations, the meaning of dreams can vary greatly depending on the individual's personal experiences and emotions.</p>
        </div>

      </div>





    </div>


  )
}
