import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
const MainHeader = () => {
    return (
        <header>
            <Link href='/'>

                <img src={logo.src} alt='a food plate' />
                Next Level Food
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/meals'>Brouse Meals </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;