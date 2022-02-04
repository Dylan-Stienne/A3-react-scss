import '../sass/components/_nav.scss';
import { Link } from "react-router-dom";
import Translator from '../services/translate';

function Nav() {
    return <nav>
        <ul>
            <li className='home-link'>
                <Link to="/"><Translator tid="NAV.LINK_HOME" /></Link>
            </li>
            <li className='portfolio-link'>
                <Link to="/portfolio"><Translator tid="NAV.LINK_PORTFOLIO" /></Link>
            </li>
            <li className='cv-link'>
                <Link to="/cv"><Translator tid="NAV.LINK_CV" /></Link>
            </li>
            <li className='quizzs-link'>
                <Link to="/quizzs"><Translator tid="NAV.LINK_QUIZZS" /></Link>
            </li>
        </ul>
    </nav>
}

export default Nav;
