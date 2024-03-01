import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { Button } from '../Button/Button'
import { SandwichMenu } from './components/SandwichMenu/SandwichMenu'
import { SearchInput } from '../SearchInput/SearchInput.1'
import { ShoppingCarIcon } from './components/ShoppingCartIcon/ShoppingCartIcon'
import { IoSearchOutline } from 'react-icons/io5'
import { TextLink } from '../TextLink/TextLink'
import styles from './Header.module.css'
import { ROUTES } from '../../routes'

const MOBILE_BREAKPOINT = 768

export const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
  }

  useEffect(() => {
    handleResize()

    const resizeListener = () => {
      handleResize()
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

const DesktopHeader = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainerTop}>
        <Logo />
        <SearchInput />
        <TextLink to={ROUTES.Home} type="secundary">
          Cadastre-se
        </TextLink>
        <Button text="Entrar" />
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

  const [isVisible, setIsVisible] = useState(false)
  const [menuState, setMenuState] = useState(MobileMenuState.CLOSED)

  const toggleMenuState = () => {
    setMenuState((prevMenuState) =>
      prevMenuState === MobileMenuState.CLOSED
        ? MobileMenuState.OPENING
        : MobileMenuState.CLOSING
    )
    setTimeout(() => {
      setMenuState((prevMenuState) =>
        prevMenuState === MobileMenuState.OPENING
          ? MobileMenuState.OPENED
          : MobileMenuState.CLOSED
      )
    }, 900)
  }

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility)
  }

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.HeaderTop}>
          <SandwichMenu onClick={toggleMenuState} />
          <Logo />
          <div className={styles.HeaderIconsContainer}>
            <IoSearchOutline
              className={`${styles.SearchIcon} 
                            ${isVisible ? styles.SearchActive : ''}`}
              onClick={toggleVisibility}
            />
            <ShoppingCarIcon />
          </div>
        </div>

        {menuState === MobileMenuState.CLOSED && isVisible && <SearchInput />}
      </header>
      {menuState !== MobileMenuState.CLOSED && (
        <>
          <div className={styles.MobileNavBar} onClick={toggleMenuState}></div>

          <div
            className={`${styles.MobileNavBarContainer} ${
              menuState === MobileMenuState.CLOSING ? styles.MenuClosed : ''
            }`}
          >
            <NavBar onClick={toggleMenuState} />
            <div className={styles.MobileNavBarFooter}>
              <Button text="Entrar" />
              <TextLink
                to={ROUTES.Home}
                type="secundary"
                onClick={toggleMenuState}
              >
                Cadastre-se
              </TextLink>
            </div>
          </div>
        </>
      )}
    </>
  )
}
