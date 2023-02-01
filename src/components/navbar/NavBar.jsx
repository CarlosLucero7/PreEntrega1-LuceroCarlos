import "./Navbar.css"

const Navbar =() =>{
    return(
        
        <nav className="menu">
            <div>
                <h1 id="titulo" >ProJect 3D</h1>
                <ul className="">
                    <li>
                        <a className="navlink " href="#">Productos</a>
                    </li>
                    <li>
                        <a className="navlink" href="#">Diseno</a>
                    </li>
                    <li>
                        <a className="navlink" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar