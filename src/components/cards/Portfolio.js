import '../../sass/components/cards/_portfolio.scss';
import IconButton from '../../components/IconButton';
import { ContainerFlex } from '../../components/Containers';
import icon_arrow_right from '../../icons/arrow-right.svg';
import Translator from '../../services/translate';
import { Link } from "react-router-dom";

function PortfolioCard() {
    return <Link to="/portfolio" className="portfolio-card">
        <h2><Translator tid="HOME.TITLE_MY_PORTFOLIO" /></h2>
        <ContainerFlex justify="between" align="center">
            <p><Translator tid="HOME.LABEL_MY_PORTFOLIO" /></p>
            <IconButton className="icon-button" color="accent-1" icon={icon_arrow_right} />
        </ContainerFlex>
    </Link>
}

export default PortfolioCard;

