import '../../sass/components/cards/_cv.scss';
import IconButton from '../../components/IconButton';
import { ContainerFlex } from '../../components/Containers';
import Translator from '../../services/translate';
import icon_download from '../../icons/download.svg';

function CvCard({ src }) {
    function seeCV() {
        window.open(src, "_blank");
    }

    return <div className="cv-card" onClick={seeCV}>
        <h2><Translator tid="HOME.TITLE_MY_CV" /></h2>
        <ContainerFlex justify="between" align="center">
            <p><Translator tid="HOME.LABEL_MY_CV" /></p>
            <a href={src} download="CV Dylan Stienne - Développeur WEB">
                <IconButton className="icon-button" color="accent-2" icon={icon_download} />
            </a>
        </ContainerFlex>
    </div>
}

export default CvCard;

