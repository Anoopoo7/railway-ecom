import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import Layout from '@layout/layout'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
