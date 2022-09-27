import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate()
    const name = useRef()
    const password = useRef()
    const formHandler = (event)=>{
        event.preventDefault()
        console.log()
        let option = {
        method : 'GET',
        headers : {
            'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
        }
        }

        fetch(`https://fbapi.sellernext.com/user/login?username=${name.current.value}&password=${password.current.value}` , option)
        .then(res => res.json())
        .then(res => {
        console.log(res)
        if(res.success){
            sessionStorage.setItem(`User` , res.data.token)
            nav('/dashboard')
        }
        else alert(res.message)
        })
    }

    useEffect(()=>{
        if(sessionStorage.getItem('User'))   nav('/dashboard')
    },[])

  return (
    <form onSubmit={formHandler}>
        <h1>Login:</h1>
        <input ref={name} type='text'/>
        <input ref={password} type='text'/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login