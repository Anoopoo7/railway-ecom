import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import Layout from '@layout/layout'
import { AnimatePresence } from 'framer-motion'
import ModalView from '@widgets/common/modal'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ModalView />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
