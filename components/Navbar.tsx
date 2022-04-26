import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];



export const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {
        menuItems.map(({text, href}) => ( // Hago desestructuración para ahorrarme escribir MenuItems.text, MenuItems.href etc
          <ActiveLink text={text} href={href} key={text}></ActiveLink>
        ))
      }

      {/* <ActiveLink text="Home" href={menuItems[0].href}></ActiveLink>
      <ActiveLink text="About" href="/about"></ActiveLink>
      <ActiveLink text="Contact" href="/contact"></ActiveLink>        
      <ActiveLink text="Pricing" href="/pricing"></ActiveLink>*/ }
    </nav>
  )
}
