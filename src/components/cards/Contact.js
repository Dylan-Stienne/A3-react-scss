import '../../sass/components/cards/_contact.scss'
import IconButton from '../../components/IconButton';
import { ContainerFlex } from '../../components/Containers';
import icon_mail from '../../icons/envelope.svg';
import icon_phone from '../../icons/phone.svg';
import icon_linkedin from '../../icons/linkedin.svg';
import icon_gitlab from '../../icons/gitlab.svg';
import Translator from '../../services/translate';

function ContactCard({ informations }) {
    return <div className="contact-card">
        <h2><Translator tid="HOME.TITLE_CONTACT_ME" /></h2>
        <ContainerFlex className="content" justify="between" align="center">
            <div className="contacts">
                <ContainerFlex align="center"><img src={icon_phone} alt="" /> <span>{informations.phone}</span></ContainerFlex>
                <ContainerFlex align="center"><img src={icon_mail} alt="" /> <span>{informations.email}</span></ContainerFlex>
            </div>
            <ContainerFlex className="actions" width="auto">
                <a href={informations['url-gitlab']} target="_blank" rel="noreferrer">
                    <IconButton className="icon-button" color="accent-3" icon={icon_gitlab} />
                </a>
                <a href={informations['url-linkedin']} target="_blank" rel="noreferrer">
                    <IconButton className="icon-button" color="accent-3" icon={icon_linkedin} />
                </a>
            </ContainerFlex>
        </ContainerFlex>
    </div>
}

export default ContactCard;

