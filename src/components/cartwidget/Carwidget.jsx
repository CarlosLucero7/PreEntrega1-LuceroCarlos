import { useContext } from "react"
import {Link} from "react-router-dom"
import { CarContext } from "../../context/CarContext"
import "./Carwidget.css"

const Carwidget=() =>{
    const {totalItem} = useContext (CarContext)

    return(
        <Link to="/Cart">
            <button className="carrito">
            <img src="https://res.cloudinary.com/drm4x1fwd/image/upload/v1676514415/Curso%20React/carrocompra_kqdwo9.ico" className="carroImg" alt="" />
            <span id="cantidad">{totalItem()}</span>
            </button>
        </Link>
            
    )
}
export default Carwidget