import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import style from './Profile.module.css';

export default function UserInfo() {
    let { userData , loading } = useContext(UserContext);

    if(loading){
            return <p>Loading...</p>
        }
    return (
        <div className={`${style.info}`}>
            <img src={userData.image.secure_url} className='rounded-circle' />
            <h2 className='fs-1'>{userData.userName}</h2>
        </div>
    )
}
