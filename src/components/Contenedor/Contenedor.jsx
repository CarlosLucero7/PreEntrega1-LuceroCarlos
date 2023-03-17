import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarContext } from "../../context/CarContext"
import ItemCount from "../ItemCount/ItemCount"

const Contenedor = ( {prod}) => {

  const {agregarCart} = useContext(CarContext)
  const onAdd = (cantidad) =>{
    const produ = {
    ...prod,
    cantidad: cantidad
    }
    agregarCart(produ)
  }
  

  return (
    <div className="prodCard">
        <h2 className="texto">{prod.nombre}</h2>
        <div ><img id="prodImg" src={prod.imagen} alt="" /></div>
        <Link to={`/item/${prod.id}`}>
        <button className="texto">Ver detalles...</button>
        </Link>
        <div className="compra">
            <h2 className="precio">Precio: ${prod.precio}</h2>
            <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>
        </div>
        
    </div>
  )
}

export default Contenedor