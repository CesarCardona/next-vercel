import { useRouter } from "next/router"
import Link from "next/link"
import { CSSProperties, FC } from "react";

const style:CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  text: string;
  href: string;
}

// Desestructuro los objetos para que ponga el texto y el href que se encuentran en Navbar.jsx

// export const ActiveLink = ({text, href}:Props) => Esta es otra forma de hacer el tipado
export const ActiveLink: FC<Props> = ({text, href}) => {
  const {asPath} = useRouter();
  
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
