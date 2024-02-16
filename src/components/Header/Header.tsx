import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { SandwichMenu } from '../SandwichMenu/SandwichMenu'
import { SearchInput } from '../SearchInput/SearchInput'
import { ShoppingCarIcon } from '../ShoppingCarIcon/ShoppingCarIcon'
import { TextLinkSecondary } from '../TextLinkSecondary/TextLinkSecondary'
import styles from './Header.module.css'
import { IoSearchOutline } from 'react-icons/io5'

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

    return(
        <>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </>
    )
}

const DesktopHeader = () => {
    return(
        <header className={styles.Header}>
            <div className={styles.HeaderContainerTop}>
                <Logo />
                <SearchInput />
                <TextLinkSecondary text='Cadastre-se' />
                <PrimaryButton text='Entrar' />
                <ShoppingCarIcon />
            </div>
            <NavBar />
        </header>
    )
}

const MobileHeader = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isVisible, setisVisible] = useState(false)
    const [isSearchable, setIsSearchable ] = useState(false)
    
    const toggleMenuState = () => {  

        if(isOpenMenu) {
            setisVisible(true)
            
            setTimeout(() => {
                setisVisible(false)
                
                setIsOpenMenu(!isOpenMenu)
            },1000)

        } 
        else{
            setIsOpenMenu(!isOpenMenu)
        }
    }

    const toggleSearchable = () => {
        setIsSearchable(!isSearchable)
    }


    return(
        <>
            <header className={styles.Header}>
                <SandwichMenu onClick={toggleMenuState}/>
                <Logo />
                <div className={styles.HeaderIconsContainer}>
                    <IoSearchOutline  className={`${styles.SearchIcon} ${ isSearchable ? styles.SearchActive : ''}`} onClick={toggleSearchable}/>
                    <ShoppingCarIcon />
                </div>
            </header>
            { isOpenMenu && (
                <div className={styles.MobileNavBar}>
                    <div className={`${styles.MobileNavBarContainer} ${ isVisible ? styles.MenuClosed : ''}`}>
                        <NavBar />
                        <div className={styles.MobileNavBarFooter}>
                            <PrimaryButton text='Entrar' />
                            <TextLinkSecondary text='Cadastre-se' />
                        </div>
                    </div>
                </div>
            )}

            { !isOpenMenu && isSearchable && ( 
                <SearchInput />
            )}
        </>
    )
}