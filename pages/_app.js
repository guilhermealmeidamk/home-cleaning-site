import '../styles/globals.css'
import BubbleLayer from '../components/BubbleLayer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BubbleLayer />
      <Component {...pageProps} />
    </>
  )
}
