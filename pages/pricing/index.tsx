import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      {/* {'title'} está haciendo referencia a una clase global, se debe encerrar entre comillas  */}
      <h1 className={'title'}> 
        {/* Ir a <a href="/about">About</a> Href normal */}
        Ir a <Link href="/">Home</Link> {/* Precarga o hace un pre fetch de la sección para que cargue más rápido */}

      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.jsx</code>
      </p>
    </MainLayout>
  )
}
