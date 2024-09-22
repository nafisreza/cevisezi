import React from 'react'
import { default as LoginComponent } from '../components/Login'
import { useSelector } from 'react-redux'




export default function Login() {
  const authStatus = useSelector(state=>state.auth.status)
  console.log(authStatus)

  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginComponent/>
    </div>
  )
}
