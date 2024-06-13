import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import classes from  './main-header.module.css'
import Image from 'next/image'
import MAinHeaderBackground from './main-header-background'


const MainHeader = () => {
    return (
        <>
        <MAinHeaderBackground />
        <header className={classes.header}>
            <Link href='/' className={classes.logo}>

                <Image src={logo} alt='a food plate' />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Brouse Meals </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default MainHeader;