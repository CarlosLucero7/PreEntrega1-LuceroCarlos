import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {productos} from "../../productoTienda"
import "./Itemlistcontainer.css"

const Itemlistcontainer = (props) => {
  
  const [items, setItems] = useState([])

  useEffect ( () =>{
    const task = new Promise((res, rej)=> {
      res (productos)
    }) 

    task
      .then((res) =>{
        setItems (res)
      })
      .catch((rej) => {
        console.log("Error")
      })
  }, []);

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