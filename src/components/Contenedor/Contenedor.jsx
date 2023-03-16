import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Contenedor = ( {prod}) => {

  const onAdd = (cantidad) =>{
    const produ = {
    nombre: prod.nombre,
    precio: prod.precio,
    imagen: prod.imagen,
    cantidad: cantidad
    }
    console.log(produ)
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