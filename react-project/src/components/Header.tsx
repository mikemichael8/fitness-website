
function Header() {
return (
    <>
        <header>
            <div className="logo">
                <img src="src/images/fitness logo.png" alt="Fitness logo" />
            </div>
            <nav className="navList">
                <ul>
                    <li><a href="#home" className="nav-Items">Home</a></li>
                    <li><a href="#about" className="nav-Items">About</a></li>
                    <li><a href="#services" className="nav-Items">Services</a></li>
                    <li><a href="#contact" className="nav-Items">Contact</a></li>
                    <li><a href="#register" className="reg">Register</a></li>
                    <li><a href="#login" className="log">Login</a></li>
                </ul>
            </nav>
        </header>
        
    </>
    );
}

export default Header;
