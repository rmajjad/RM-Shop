import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import { Link } from 'react-router-dom';

export default function Profile() {


    let {userData} = useContext(UserContext);
    console.log(userData);

    return (
    <>
    <div className='container '>
        <div className='d-flex align-items-center'>
            <img src={userData?userData.image.secure_url:"No image"} className='rounded-circle'/>
            <h2 className='fs-1'>{userData?userData.userName:"No user Name"}</h2>
        </div>
        <hr />  
        <h2><i>User Contact:</i></h2>
        <h3>Email: <a href='https://mail.google.com/' className='text-success'>{userData?userData.email:"No user email"}</a> </h3>
    </div>
        
    
    </>    
        
    )
}
