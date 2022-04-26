import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface Props { // Creo una interfaz para agregar reglas de tipado
  children?: JSX.Element | JSX.Element[]; // Indico que children será de tipo JSX.Element
}  
export const MainLayout: FC<Props> = ({children}) => { // Acá recibiré las propiedades, en este caso children es lo que pondré dentro del layout
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Inicial</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}> 
        {/*Children puede ser cualquier cosa, JSX o lo que quiera poner */}
        {children}
      </main>
    </div>
  )
}
