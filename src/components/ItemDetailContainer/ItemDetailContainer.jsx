import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { database } from "../../firebaseConfig"
import {getDoc, collection, doc} from "firebase/firestore"

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

    // let prodElegido = productos.find ( product => product.id === +id)

    // setProd (prodElegido)
  },[id]
  )
  return (
    <div>
      <h1>{prod.nombre}</h1>
      <h2>Material de fabricacion: {prod.material}</h2>
      <h2>Cateegoria: {prod.categoria}</h2>
      <h2>Precio: ${prod.precio}</h2>
      <h2>Stock disponible: {prod.stock} </h2>
    </div>
  )
}

export default ItemDetailContainer