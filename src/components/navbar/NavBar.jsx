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
                        <Link to='/category/Figura'><a className="navlink " href="#">Figuras</a></Link>
                    </li>
                    <li>
                        <Link to='/category/Mate'><a className="navlink" href="#">Mates</a></Link>
                    </li>
                    <li>
                        <Link to='/category/Llavero'><a className="navlink" href="#">Llaveros</a></Link>  
                    </li>
                    <li>
                        <Link to='/category/Soporte'><a className="navlink" href="#">Soportes</a></Link>
                    </li>
                    <Carwidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar