import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const nav = useNavigate()

    useEffect(()=>{
        if(!sessionStorage.getItem('User'))   nav('/')
    },[])
  return (
    <div className='dash'>Welcome to <br/>Dashboard Page</div>
  )
}

export default Dashboard