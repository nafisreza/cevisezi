import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { checkAuthStatus } from "../store/authSlice"

function Protected({children, authentication}){
  const authStatus = useSelector(state => state.auth.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    dispatch(checkAuthStatus()).then(() => {
      if(authentication && !authStatus){
        navigate('/login')
      } else if(!authentication && authStatus){
        navigate("/")
      }
      setLoader(false)
    })
  }, [authStatus, authentication, navigate, dispatch])
  
  return loader ? <p>Loading...</p> : <>{children}</>
}

export default Protected