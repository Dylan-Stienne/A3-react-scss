import '../../sass/components/cards/_cv.scss';
import IconButton from '../../components/IconButton';
import { ContainerFlex } from '../../components/Containers';
import Translator from '../../services/translate';
import icon_download from '../../icons/download.svg';
import { Link } from "react-router-dom";

function CvCard({ src }) {
    return <Link to='/cv' className="cv-card">
        <h2><Translator tid="HOME.TITLE_MY_CV" /></h2>
        <ContainerFlex justify="between" align="center">
            <p><Translator tid="HOME.LABEL_MY_CV" /></p>
            <a href={src} download="CV Dylan Stienne - Développeur WEB">
                <IconButton className="icon-button" color="accent-2" icon={icon_download} />
            </a>
        </ContainerFlex>
    </Link>
}

export default CvCard;

