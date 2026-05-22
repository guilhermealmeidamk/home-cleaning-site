import '../styles/globals.css'
import BubbleLayer from '../components/BubbleLayer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const hideBubbles = router.pathname === '/link-bio' || router.asPath?.startsWith('/link-bio')

  return (
    <>
      {!hideBubbles && <BubbleLayer />}
      <Component {...pageProps} />
    </>
  )
}
