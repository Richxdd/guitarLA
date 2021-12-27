
import Curso from '../components/Curso';
import Layout from '../components/Layout'
import Listado from '../components/Listado';
import ListadoBlog from '../components/ListadoBlog';

const Home = ({ guitarras,cursos,entradas }) => {

  return (

    <Layout
      pagina='Incio'
      guitarra={guitarras[0]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso cursos={cursos}/>
      <section className='contenedor'>
      <ListadoBlog entradas={entradas}/>
      </section>
    </Layout>

  )
}

export async function getServerSideProps() {

  // const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json()

  // const urls = `${process.env.API_URL}/cursos`
  // const res = await fetch(urls)
  // const cursos = await res.json()



  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`
  

  const [resGuitarras,resCursos,resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras,cursos,entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
    
  ])

  return {
    props: {
      guitarras,
      cursos,
      entradas
    }
  }
}


export default Home