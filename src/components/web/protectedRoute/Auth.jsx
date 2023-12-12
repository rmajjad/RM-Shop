import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Auth({children}) {

    let navigate = useNavigate();
    

    if(localStorage.getItem('userToken') != null) {
        return <Navigate to='/' />;
    }
        return navigate(-1);
} 
