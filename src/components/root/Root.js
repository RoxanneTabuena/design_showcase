import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './header/Header'
import { Footer } from './Footer'
import { Welcome } from './Welcome'
import React, { useState, useEffect, useRef } from 'react'
import { parseOrientation, random } from '../utils'
import classes from './root.module.css'
import { landscape_dic, portrait_dic } from '../img_dics'
import { ScrollToTop } from '../../ScrollToTop'

export const Root = () => {
    const { pathname } = useLocation()
    const mainRef = useRef(null)

    // Track orientation
    const orientation = parseOrientation(window.screen.orientation.type)

    // Navigation menu toggle
    const [nav, setNav] = useState('icon')

    // Background image title and object
    const [title, setTitle] = useState(() => {
        return localStorage.getItem('backgroundTitle') || ''
    })
    const [background, setBackground] = useState(null)

    // Update background on orientation change
    useEffect(() => {
        const dic = orientation === 'landscape' ? landscape_dic : portrait_dic
        const titles = Object.keys(dic)

        if (title && dic[title]) {
            setBackground(dic[title])
        } else {
            const randomTitle = titles[random(titles.length)]
            setTitle(randomTitle)
            setBackground(dic[randomTitle])
            localStorage.setItem('backgroundTitle', randomTitle)
        }
    }, [title, orientation])

    // Reset nav on route change
    useEffect(() => {
        setNav('icon')
    }, [pathname])


    // Toggle nav between menu and icon
    const handleMenuToggle = () => {
        setNav(prev => (prev === 'nav' ? 'icon' : 'nav'))
    }

    // Scroll to top on pathchange
    ScrollToTop(mainRef)
    return (
        <div className={classes.fillparent}>
            <Header
                onMenuToggle={handleMenuToggle}
                nav={nav}
                orientation={orientation}
                pathname={pathname}
            />
            <div 
                ref= {mainRef}
                className={`${classes.main} ${pathname === '/' && classes.welcome}`}>
                {pathname === '/' ? (
                    <Welcome orientation={orientation} title={title} background={background} />
                ) : (
                    <Outlet context={[orientation]}/>
                )}
            </div>
            { 
            orientation === 'landscape' &&
            <Footer />
            }
        </div>
    )
}
