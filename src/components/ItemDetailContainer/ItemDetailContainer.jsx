import { useEffect, useState } from "react"
import {productos} from "../../productoTienda"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [prod, setProd] = useState({})

  useEffect( ()=>{

    let prodElegido = productos.find ( product => product.id === +id)

    setProd (prodElegido)
  },[]
  )
  return (
    <div>
      <h1>{prod.nombre}</h1>
      <h2>Material de fabricacion: {prod.material}</h2>
      <h2>Cateegoria: {prod.categoria}</h2>
      <h2>Precio: ${prod.precio}</h2>
    </div>
  )
}

export default ItemDetailContainer