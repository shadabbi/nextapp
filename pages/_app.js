import '../styles/globals.css'
// add bootstrap css 

import Layout from '../components/layout/layout'



function MyApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /> </Layout>
}

export default MyApp
