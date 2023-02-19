import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Contenedor = ( {prod}) => {
  return (
    <div className="prodCard">
        <h2 className="texto">{prod.nombre}</h2>
        <div ><img id="prodImg" src={prod.imagen} alt="" /></div>
        <h4 className="texto">Caregoria: {prod.categoria}</h4>
        <h4 className="texto">Material: {prod.material}</h4>
        <Link to={`/item/${prod.id}`}>
        <button className="texto">Ver detalles...</button>
        </Link>
        <div className="compra">
            <h2 className="precio">${prod.precio}</h2>
            <ItemCount/>
        </div>
        
    </div>
  )
}

export default Contenedor