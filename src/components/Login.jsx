import React from 'react'
import authService from '../appwrite/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Input from './Input'
import { Button } from './Button'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'

const Login = () => {
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit } = useForm()
    const login = async (data) => {
        try {
            const session = await authService.login(data)
            if (session) {
                const currentUserData = await authService.getCurrentUser()
                if (currentUserData) {
                    dispatch(authLogin(currentUserData))
                    navigate("/")
                }
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }




    return (
        <div className='w-full flex justify-center items-center'>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(login)} >
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
                
                <Button type='submit'>Login</Button>
            </form>

            


        </div>
    )
}

export default Login