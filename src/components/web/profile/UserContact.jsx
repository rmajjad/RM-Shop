import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';

export default function UserContact() {

    let { userData , loading } = useContext(UserContext);

    if(loading){
            return <p>Loading...</p>
        }

    return (
        <div>
            <h2><i>User Contact:</i></h2>
            <p className='fs-3'>Email: <a href='https://mail.google.com/' className='text-success text-decoration-none'>{userData.email}</a> </p>
        </div>
    )
}
