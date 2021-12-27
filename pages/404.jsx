
import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const Noencontrado = () => {
    return (
        
            <div className={styles.no_encontrado}>
                <h1 className='heading'>Pagina no encontrada</h1>
                <Link href="/">Volver al incio</Link>
            </div>
       
    )
}

export default Noencontrado
