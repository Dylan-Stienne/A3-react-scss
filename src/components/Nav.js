import '../sass/components/_nav.scss'
import { Link } from "react-router-dom";

function Nav() {
    return <nav>
        <ul>
            <li className='home-link'><Link to="/">Qui suis-je ?</Link></li>
            <li className='portfolio-link'><Link to="/portfolio">Mon portfolio</Link></li>
            <li className='cv-link'><Link to="/cv">Mon CV</Link></li>
        </ul>
    </nav>
}

export default Nav;
