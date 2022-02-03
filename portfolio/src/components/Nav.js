import { Link } from "react-router-dom";

function Nav() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/cv">Cv</Link>
    </nav>
}

export default Nav;
