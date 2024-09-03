import React from 'react'
import { forwardRef } from 'react'
import { useId } from 'react'

const Input = forwardRef(function Input({label, type="text", ref, placeholder, ...props}){

    const id = useId

    return (
        <div className='w-full'>
            <label htmlFor={id}>{label}</label> 
            <input type={type} ref={ref} id={id} placeholder={placeholder} {...props}/>
        </div>
    )
})

export default Input