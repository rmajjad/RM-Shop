import React from 'react'
import { Navigate } from 'react-router-dom'; //we can't use (useNavigate) here, it's can't work with protectedRoute so we use Navigate from react router dom 

export default function ProtectedRoute({children}) {


    if(localStorage.getItem('userToken') == null) {
        return <Navigate to='/login' />;
    }
        return children;

    
}
