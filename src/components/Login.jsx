import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { checkAuthStatus } from '../store/authSlice';
import Input from './Input';
import { Button } from './Button';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = async (data) => {
        setError(""); // Clear any previous errors
        try {
            const session = await authService.login(data);
            if (session) {
                await dispatch(checkAuthStatus()).unwrap();
                navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message || "An error occurred during login");
        }
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit(login)} className='w-full max-w-md'>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid email address"
                        }
                    })}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                        }
                    })}
                    error={errors.password}
                />
                <Button type='submit' className='w-full'>Login</Button>
            </form>
        </div>
    );
};

export default Login;