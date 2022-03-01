import { formatearFecha } from "../../helpers/Index"
import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({ entrada }) => {
  const { titulo, contenido, imagen, published_at } = entrada[0]

  return (
    <Layout pagina={titulo}>
      <main className='contenedor'>
        <h1 className='heading'>{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            width={800}
            height={600}
            priority='true'
            layout='responsive'
            src={imagen.url}
            alt={`imagen blog ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

  const paths = entrada.map((entrada) => ({
    params: { url: entrada.url },
  }))

  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { url } }) {
  const urls = ` ${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urls)
  const entrada = await respuesta.json()

  return {
    props: {
      entrada,
    },
  }
}

// export async function getServerSideProps({ query: { url } }) {

//     const urls = ` ${process.env.API_URL}/blogs?url=${url}`
//     const respuesta = await fetch(urls)
//     const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada

//         }
//     }
// }

export default EntradaBlog
