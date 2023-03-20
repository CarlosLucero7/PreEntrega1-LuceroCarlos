import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { database } from "../../firebaseConfig"
import {getDoc, collection, doc} from "firebase/firestore"
import "./ItemDetailconteiner.css"

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [prod, setProd] = useState({})

  useEffect( ()=>{

    const itemCollection = collection(database,"productos")
    const ref = doc(itemCollection, id)

    getDoc(ref)
    .then((res)=>{
      setProd({
        ...res.data(),
        id: res.id
      })
    })
  },[id]
  )
  return (
    <div className="cardDetail">
      <h1 className="titulo">{prod.nombre}</h1>
      <img src={prod.imagen} alt="Imagen del producto" className="imgDetail" />
      <div className="contenido">
        <h2>Material de fabricacion: {prod.material}</h2>
        <h2>Categoria: {prod.categoria}</h2>
        <h2>Precio: ${prod.precio}</h2>
        <h2>Stock disponible: {prod.stock} </h2>
      </div>
    </div>
  )
}

export default ItemDetailContainer