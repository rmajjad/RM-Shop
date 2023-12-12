import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/web/navbar/Navbar.jsx'
import Footer from '../components/web/footer/Footer.jsx'


export default function Layout(/*{user,setUser}*/) {
    return (
    <>
        <Navbar /*user={user} setUser={setUser}*//>
        <Outlet/>
        <Footer/>
    </>
    )
}
