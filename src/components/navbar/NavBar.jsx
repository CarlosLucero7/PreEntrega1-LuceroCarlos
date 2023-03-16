import {Link, NavLink} from "react-router-dom"
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
                        <NavLink to='/category/Figura' className= {({isActive}) => isActive ? "navlink-active" : "navlink"}>
                        Figuras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/Mate' className= {({isActive}) => isActive ? "navlink-active" : "navlink"}>
                        Mates
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/Llavero' className= {({isActive}) => isActive ? "navlink-active" : "navlink"}>
                        Llaveros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/Soporte' className= {({isActive}) => isActive ? "navlink-active" : "navlink"}>
                        Soportes
                        </NavLink>
                    </li>
                    <Carwidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar