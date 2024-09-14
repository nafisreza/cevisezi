import React from 'react'
import { forwardRef } from 'react'
import { useId } from 'react'

const Select = forwardRef(function Select({label, ref, options}){

    const id = useId()
   
    return (
        <div className='w-full'>
            <label htmlFor={id}>{label}</label> 
            <select ref={ref} id={id} > 
                {options.map(
                    (option)=><option key={option} value={option}>{option}</option>
                    )}
            </select>
        </div>
    )
})

export default Select