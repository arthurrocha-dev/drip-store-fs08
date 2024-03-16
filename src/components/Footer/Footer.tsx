/* eslint-disable react/jsx-key */
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Logo } from '../Logo/Logo'
import { LinksSection } from './components/LinksSection/LinksSection'
import { TextLink } from '../TextLink/TextLink'
import styles from './Footer.module.css'

export const Footer = () => {
  const date = new Date()
  const yaer = date.getFullYear()

  const informatinoLinksList = [
    {
      title: 'Sobre Drip Store',
      url: '#',
    },
    {
      title: 'Segurança',
      url: '#',
    },
    {
      title: 'Wishlist',
      url: '#',
    },
    {
      title: 'Blog',
      url: '#',
    },
    {
      title: 'Trabalhe conosco',
      url: '#',
    },
    {
      title: 'Meus Pedidos',
      url: '#',
    },
  ]

  const categoryList = [
    {
      title: 'Camisa',
      url: '#',
    },
    {
      title: 'Calça',
      url: '#',
    },
    {
      title: 'Boné',
      url: '#',
    },
    {
      title: 'Headphones',
      url: '#',
    },
    {
      title: 'Tênis',
      url: '#',
    },
  ]

  const contactList = [
    {
      title:
        'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
      url: '#',
    },
    {
      title: '(85) 3051-3411',
      url: '#',
    },
  ]

  return (
    <footer>
      <div className={styles.FootercContainer}>
        <div className={styles.FooterMainContainer}>
          <Logo secondary />
          <p className={styles.FooterMainContainer_p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className={styles.SocialMedias}>
            <FaFacebookF className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaXTwitter className={styles.icon} />
          </div>
        </div>
        <div className={styles.FooterLinksContainer}>
          <LinksSection title="Informações">
            <ul>
              {informatinoLinksList.map((link) => {
                return (
                  <li className={styles.ListLinksIten} key={link.title}>
                    <TextLink to={link.url} type="tertiary">
                      {link.title}
                    </TextLink>
                  </li>
                )
              })}
            </ul>
          </LinksSection>

          <LinksSection title="Categorias">
            <ul>
              {categoryList.map((link) => {
                return (
                  <li className={styles.ListLinksIten} key={link.title + 1}>
                    <TextLink to={link.url} type="tertiary">
                      {link.title}
                    </TextLink>
                  </li>
                )
              })}
            </ul>
          </LinksSection>

          <LinksSection title="Contato">
            <ul>
              {contactList.map((link) => {
                return (
                  <li className={styles.ListLinksIten} key={link.title + 2}>
                    <TextLink to={link.url} type="tertiary">
                      {link.title}
                    </TextLink>
                  </li>
                )
              })}
            </ul>
          </LinksSection>
        </div>
      </div>
      <p className={styles.CopyrightMSG}>@ {yaer} Digital College</p>
    </footer>
  )
}
