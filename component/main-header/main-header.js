'use client'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import classes from  './main-header.module.css'
import Image from 'next/image'
import MAinHeaderBackground from './main-header-background'
import { usePathname } from 'next/navigation'


const MainHeader = () => {
    const path= usePathname()
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
                        <Link href='/meals' className={path.startsWith('/meals')? classes.active:undefined}>BrouseMeals </Link>
                    </li>
                    <li>
                        <Link href='/community' className={path.startsWith('/community')?classes.active:undefined}>Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default MainHeader;