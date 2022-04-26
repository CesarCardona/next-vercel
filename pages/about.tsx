import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={'title'}>
        {/* Ir a <a href="/">Home</a> Href clásico */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.jsx</code>
      </p>
    </>
  )
}

// Con este código utilizaré el layout que necesito de una forma más óptima
// Esta función será invocada en _app.js
AboutPage.getLayout = function getLayout (page: JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}