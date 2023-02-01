const Navbar =() =>{
    return(
        
        <nav class="navbar navbar-dark menu fixed-top">
            <div class="container-fluid">
                <h1 id="titulo" >ProJect 3D</h1>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img scr="%PUBLIC_URL%/carrocompra.png" ></img>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
       
                    </div>
                    <div class="offcanvas-body">
        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar