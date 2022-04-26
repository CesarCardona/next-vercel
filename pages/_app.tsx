import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // La siguiente línea es el código que me retorna el layout si lo tiene o simplemente retorna la página
  // La página de about tiene una función .getLayout que está utilizando 2 layouts anidados
  const getLayout = Component.getLayout || ((page) => page)
  return(
    // <>
    //   {/* <Component {...pageProps} /> Este es el código original sin que se renderize con layout */}
    // </>
    getLayout(<Component {...pageProps} />) // Este es el código que renderiza los componentes renderizandolos con el layout
  )
}

export default MyApp
