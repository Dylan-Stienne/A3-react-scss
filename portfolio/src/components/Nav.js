import { Link } from "react-router-dom";

function Nav() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/cv">cv</Link>
    </nav>
}

export default Nav;
