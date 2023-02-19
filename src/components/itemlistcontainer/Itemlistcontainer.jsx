import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {productos} from "../../productoTienda"
import { useParams } from "react-router-dom"
import "./Itemlistcontainer.css"

const Itemlistcontainer = (props) => {

  const {categoryId} = useParams()
  
  const [items, setItems] = useState([])

  useEffect ( () =>{
    
    const prodFiltro = productos.filter ((product => product.categoria === categoryId))

    const task = new Promise((res, rej)=> {
      res (categoryId !== undefined ? prodFiltro : productos )
    }) 

    task
      .then((res) =>{
        setItems (res)
      })
      .catch((rej) => {
        console.log("Error")
      })
  }, [categoryId]);

  return (
    <div>
        <section id="prod">
        <h2 style={ {paddingTop: "0.5rem"} } >Productos:</h2>
        <ItemList items={items}/>
        </section>
        
    </div>
  )
}

export default Itemlistcontainer