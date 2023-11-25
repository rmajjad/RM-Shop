import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/dashboard/footer/Footer.jsx'
import Navbar from '../components/dashboard/navbar/Navbar.jsx'


export default function DashboardLayout() {
    return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    )
} 
