import React from 'react'
import { ReviewCard } from './ReviewCard'

export const UserReview = () => {
  return (
    <div className='py-7 '>
    <h1 className='text-5xl font-semibold uppercase py-3'>Recenzii</h1>

    <div className='flex  justify-around flex-wrap gap-2'>

      <ReviewCard name="Adina" title="Interpretari precise si relevante" date="12.07.24" review="Am folosit acest site pentru a intelege cateva dintre visele mele recente, iar interpretările au fost surprinzator de precise"/>

      <ReviewCard name="Andrei" title="Un plus pentru utilizatori" date="22.08.24" review="Un lucru care mi-a placut foarte mult la aceasta pagina este optiunea de a trimite vise pentru interpretari personalizate"/>

      <ReviewCard name="Silvia " title="Perspective noi pentru visele mele" date="13.05.24" review="Experienta mea pe acest site a fost excelenta. Este foarte intuitiv si mi-a oferit o perspectiva noua asupra viselor mele"/>

      <ReviewCard name="Aria" title="Informatii utile" date="30.09.24" review="Deși pagină oferă o mulțime de informații utile, cred că ar putea fi îmbunătățită prin adăugarea unui forum de discuții"/>

      <ReviewCard name="Maria" title="Interpretari detaliate si fundamentate" date="07.03.24" review="Interpretarile sunt foarte bine detaliate si ofera explicatii care par bine fundamentate"/>

      <ReviewCard name="Ionela" title="Explicatii clare ale simbolurilor" date="12.05.24" review="Fiecare simbol din vise este explicat clar dar ar fi minunat sa existe si exemple din viata reala pentru o mai buna intelegere"/>

      
      
    </div>
    </div>
  )
}
