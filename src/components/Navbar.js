import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
           <nav className="Navbar flex p-4 content-center justify-center gap-4">

            <Link to="/">Home</Link> 

            <Link to="/main-light">Main Light</Link>

            <Link to="/desk-lights">Desk Lights</Link>  

            <Link to="/bed-lights">Bed Lights</Link> 
        
           </nav> 

    );
};
export default Navbar;