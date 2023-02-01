import "./Carwidget.css"
import {BsCart4} from 'react-icons/bs'

const Carwidget=() =>{
    return(
        <button className="carrito">
            <BsCart4 />
            <span id="cantidad">0</span>
        </button>
    )
}
export default Carwidget