import {Link} from "react-router-dom"
import Carwidget from "../cartwidget/Carwidget"
import "./Navbar.css"

const Navbar =() =>{
    return(
        <nav className="menu">
            <div>
                <Link to="/">
                    <h1 id="titulo" >ProJect 3D</h1>
                </Link>
                <ul className="lista">
                    <li>
                        <Link to='/category/Figura' className= "navlink-active">Figuras</Link>
                    </li>
                    <li>
                        <Link to='/category/Mate' className="navlink">Mates</Link>
                    </li>
                    <li>
                        <Link to='/category/Llavero' className="navlink">Llaveros</Link>  
                    </li>
                    <li>
                        <Link to='/category/Soporte' className="navlink">Soportes</Link>
                    </li>
                    <Carwidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar