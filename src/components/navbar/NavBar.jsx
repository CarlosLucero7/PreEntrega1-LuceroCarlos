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
                        <a className="navlink " href="#">Figuras</a>
                    </li>
                    <li>
                        <a className="navlink" href="#">Mates</a>
                    </li>
                    <li>
                        <a className="navlink" href="#">Llaveros</a>
                    </li>
                    <li>
                        <a className="navlink" href="#">Repuestos</a>
                    </li>
                    <Carwidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar