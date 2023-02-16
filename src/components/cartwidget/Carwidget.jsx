import {Link} from "react-router-dom"
import "./Carwidget.css"
import {BsCart4} from 'react-icons/bs'

const Carwidget=() =>{
    return(
        <Link to="/Cart">
            <button className="carrito">
            <img src="https://res.cloudinary.com/drm4x1fwd/image/upload/v1676514415/Curso%20React/carrocompra_kqdwo9.ico" className="carroImg" alt="" />
            <span id="cantidad">0</span>
            </button>
        </Link>
            
    )
}
export default Carwidget