import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>guitarLA - {pagina}</title>
        <meta name='description' content='Sitio Web de venta de guitarras' />
        <link rel='icon' href='./img/favicon.ico' />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null,
}

export default Layout
