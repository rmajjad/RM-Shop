import React from 'react'
import style from './FirstPage.module.css';

export default function FirstPage() {
    return (
        <div className={`${style.homePage} `}>
            <div className={`${style.pageOne} container`}>
                <h1 className={`${style.welcome} `}>WELCOME TO RAMA STORE</h1>
                <p>Hello, you are in the wonderful shop, enjoy🌹!</p>
            </div>
        </div>
    )
}
