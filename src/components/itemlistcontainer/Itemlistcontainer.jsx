import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./Itemlistcontainer.css"
import { database } from "../../firebaseConfig"
import {getDocs,collection,query,where} from "firebase/firestore"

const Itemlistcontainer = (props) => {

  const {categoryId} = useParams()
  
  const [items, setItems] = useState([])

  useEffect ( () =>{

    const itemCollection = collection(database,"productos");

    if(categoryId){
      const q = query(itemCollection, where("categoria","==",categoryId))
      getDocs(q)
      .then((res)=>{
        const products = res.docs.map (product =>{
          return{
            ...product.data(),
            id: product.id
          }
        })
        setItems(products)
      })

    }else{
      getDocs(itemCollection)
      .then((res)=>{
        const products = res.docs.map (product =>{
          return{
            ...product.data(),
            id: product.id
          }
        })
        setItems(products)
      })
      .catch((err)=> console.log("Error"))
    }
  },[categoryId]);
  
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