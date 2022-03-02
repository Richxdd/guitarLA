import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/Guitarra.module.css"
import Layout from "../../components/Layout"

const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1)
  const { nombre, precio, imagen, descripcion, id } = guitarra[0]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cantidad < 1) {
      alert("Cantidad no válida")
      return
    }

    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout='responsive'
          width={180}
          priority='true'
          height={350}
          src={imagen.url}
          alt={`Imagen Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.resumen}>{descripcion}</p>
          <p className={styles.precio}>
            {"$"}
            {precio}
          </p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value='0'>-- Seleccione --</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='6'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <input type='submit' value='Agregar al Carrito' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {
  const urls = ` ${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urls)
  const guitarra = await respuesta.json()

  return {
    props: {
      guitarra,
    },
  }
}

export default Producto
