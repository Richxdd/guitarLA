import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../helpers/Index";
import styles from '../styles/Entrada.module.css';


const Entrada = ({entrada}) => {

    const {titulo,resumen,imagen,published_at,id,url} = entrada
    
    return (
        <article>

            <Image width={800} height={600} priority='true' layout="responsive" src={imagen.url} alt={`imagen blog ${titulo}`}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
               <p className={styles.resumen}>{resumen}</p>
               <Link href={`/blog/${url}`}>
                   <a className={styles.enlace}>
                        Leer Más
                   </a>    
               </Link>
            </div>
            
        </article>
    )
}

export default Entrada
