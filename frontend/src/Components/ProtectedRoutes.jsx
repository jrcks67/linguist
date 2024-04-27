import { useEffect } from "react"
import { Link, Navigate, Outlet } from "react-router-dom"



const useAuth = () => {
    const user = {loggedIn:false}
    return user && user.loggedIn
}

function  ProtectedRoutes()  {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         Navigate("/login")
    //     },1000)
    // },[])

    const authenticated = useAuth()
  return authenticated ? <Outlet/> : <div>Sign in first</div>
}

export default ProtectedRoutes