
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
      <Layout pagina='Nosotros'>
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros '/>
              <div>
                  <p>
                    Nulla vel neque nunc. Pellentesque eget mollis nisl. Nam fermentum lectus in augue consectetur cursus. Donec ut dapibus elit. 
                    Vestibulum nulla nibh, pulvinar sit amet bibendum ut, semper sit amet dolor. In mattis lorem nec ipsum tincidunt, sed placerat 
                    leo egestas. In hac habitasse platea dictumst. Ut a risus et dui vestibulum interdum rutrum quis risus. Interdum et malesuada 
                    fames ac ante ipsum primis in faucibus.
                  </p>
                  <p>
                    Nulla vel neque nunc. Pellentesque eget mollis nisl. Nam fermentum lectus in augue consectetur cursus. Donec ut dapibus elit. 
                    Vestibulum nulla nibh, pulvinar sit amet bibendum ut, semper sit amet dolor. In mattis lorem nec ipsum tincidunt, sed placerat 
                    leo egestas. In hac habitasse platea dictumst. Ut a risus et dui vestibulum interdum rutrum quis risus. Interdum et malesuada 
                    fames ac ante ipsum primis in faucibus.
                  </p>              
              </div>
            </div>
        </main>
      </Layout>
    )
}

export default Nosotros
