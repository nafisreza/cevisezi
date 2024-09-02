import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'

export default function LogoutBtn() {

    const dispatch = useDispatch()
    const handleLogout = ()=> {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }


  return (
    <div onClick={handleLogout}>LogoutBtn</div>
  )
}
