import React from 'react'
import authService from '../appwrite/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Input from './Input'
import { Button } from './Button'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const SignUp = () => {
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit } = useForm()
    const createUser = async (data) => {
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const currentUserData = await authService.getCurrentUser()
                if (currentUserData) {
                    dispatch(login({ currentUserData }))
                }
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div className='w-full flex justify-center items-center'>
            <h1>SignUp</h1>

            <form onSubmit={handleSubmit(createUser)} >
                <Input lable="name" placeholder="Enter your name"
                    {...register("name", {
                        required: true,
                    })} 
                />
                <Input lable="email" type="email" placeholder="Enter your email"
                     {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                />
                <Input lable="password" type="password" placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })} 
                />
                
                <Button type='submit'>SignUp</Button>
            </form>

            


        </div>
    )
}

export default SignUp