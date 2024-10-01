import React from "react";

export const FAQ = () => {
  return (
    <div className="pt-7">
      <h1 className="text-5xl font-semibold py-3 mb-6 ">FAQ</h1>

      <div className="group my-6 max-w-2xl">
        <hr className="border-t-0 bg-gradient-to-r from-blue-500  to-purple-800 h-1" />
        <details className="bg-white  ">
          <summary className="mt-2 flex cursor-pointer justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
            Pot visele sa aiba semnificatii diferite pentru fiecare persoana?
            </h3>
            <svg
              data-accordion-icon
              className="w-3 h-3 shrink-0 group-hover:rotate-180  group-hover:text-purple-800 transition-transform duration-1000"
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
          Da, semnificatiile viselor pot varia de la o persoana la alta, in functie de experientele, cultura si emotiile fiecarui individ. Desi unele simboluri pot avea interpretari generale, ele trebuie adaptate contextului personal al celui care viseaza.
          </p>
        </details>
      </div>

      <div className="group my-6 max-w-2xl">
        <hr className="border-t-0 bg-gradient-to-r from-blue-500  to-purple-800 h-1" />
        <details className="bg-white  ">
          <summary className="mt-2 flex cursor-pointer justify-between items-center">
            <h3 className=" text-xl font-semibold text-gray-800">
            De ce nu imi amintesc visele?
            </h3>
            <svg
              data-accordion-icon
              className="w-3 h-3 shrink-0 group-hover:rotate-180  group-hover:text-purple-800 transition-transform duration-1000"
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
          Este normal sa nu iti amintesti toate visele. Unele persoane isi amintesc mai multe vise decat altele din cauza ciclurilor de somn, stresului sau altor factori. Tinerea unui jurnal de vise si incercarea de a le scrie imediat dupa trezire poate ajuta la imbunatatirea memoriei viselor.
          </p>

        </details>
      </div>

      <div className="group my-6 max-w-2xl">
        <hr className="border-t-0 bg-gradient-to-r from-blue-500  to-purple-800 h-1" />
        <details className="bg-white  ">
          <summary className="mt-2 flex cursor-pointer justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
             Pot visele sa prezica viitorul?
            </h3>
            <svg
              data-accordion-icon
              className="w-3 h-3 shrink-0 group-hover:rotate-180  group-hover:text-purple-800 transition-transform duration-1000"
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
          Nu exista dovezi stiintifice care sa sustina faptul ca visele pot prezice viitorul. Cu toate acestea, unele persoane considera ca visele lor le oferă intuitii sau ghidare subconstienta cu privire la evenimentele viitoare.
          </p>
        </details>
      </div> 
    </div>
  );
};
