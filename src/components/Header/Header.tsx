import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { Button } from '../Button/Button'
import { SandwichMenu } from './components/SandwichMenu/SandwichMenu'
import { SearchInput } from '../SearchInput/SearchInput'
import { ShoppingCarIcon } from './components/ShoppingCarIcon/ShoppingCartIcon'
import { IoSearchOutline } from 'react-icons/io5'
import { TextLink } from '../TextLink/TextLink'
import styles from './Header.module.css'

export const Header = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile ? <MobileHeader /> : <DesktopHeader />
}

const DesktopHeader = () => {
    return(
        <header className={styles.Header}>
            <div className={styles.HeaderContainerTop}>
                <Logo />
                <SearchInput />
                <TextLink secondary text='Cadastre-se' />
                <Button text='Entrar' />
                <ShoppingCarIcon />
            </div>
            <NavBar />
        </header>
    )
}

const MobileHeader = () => {
    const MobileMenuState = {
        CLOSED: 'CLOSED',
        CLOSING: 'CLOSING',
        OPENED: 'OPENED',
        OPENING: 'OPENING',
    }

    const [isVisible, setIsVisible ] = useState(false)
    const [menuState, setMenuState] = useState(MobileMenuState.CLOSED);
     
    const toggleMenuState = () => {  
        if (menuState === MobileMenuState.CLOSED) {
            setMenuState(MobileMenuState.OPENING);
            setTimeout(() => {
                setMenuState(MobileMenuState.OPENED);
            }, 900);
        } 
        else {
            setMenuState(MobileMenuState.CLOSING);
            setTimeout(() => {
                setMenuState(MobileMenuState.CLOSED);
                console.log(menuState);
            }, 900);
          }
    }

    const tobbleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return(
        <>
            <header className={styles.Header}>
                <SandwichMenu onClick={toggleMenuState}/>
                <Logo />
                <div className={styles.HeaderIconsContainer}>
                    <IoSearchOutline  className={`${styles.SearchIcon} 
                        ${isVisible 
                        ? styles.SearchActive : ''}`} onClick={tobbleVisibility}/>
                    <ShoppingCarIcon />
                </div>
            </header>
            {menuState !== (MobileMenuState.CLOSED || MobileMenuState.CLOSING) && (
                <>
                    <div className={styles.MobileNavBar} onClick={toggleMenuState}></div>

                    <div
                        className={`${styles.MobileNavBarContainer} ${
                            menuState === MobileMenuState.CLOSING
                            ? styles.MenuClosed
                            : ''
                        }`}
                    >
                        <NavBar />
                        <div className={styles.MobileNavBarFooter}>
                        <Button text="Entrar" />
                        <TextLink secondary text="Cadastre-se" />
                        </div>
                    </div>
                </> 
            )}

             {menuState === MobileMenuState.CLOSED && isVisible && <SearchInput />}
        </>
    )
}