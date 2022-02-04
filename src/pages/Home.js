import Container, { ContainerFlex, Row } from '../components/Containers';
import SkillsList from '../components/SkillsList'
import MainCard from '../components/cards/Main'
import PortfolioCard from '../components/cards/Portfolio'
import CvCard from '../components/cards/Cv'
import ContactCard from '../components/cards/Contact'
import mock from '../services/mock';
import '../sass/pages/_home.scss';


function Home() {
    const informations = mock.getMyInfos();
    const skills = mock.getMySkills();

    return (
        <Container id="home-page">
            <Container className="hero-header" width="100" justify="center">
                <ContainerFlex className="hero-header__content" width="max" height="100" justify="center">
                    <Container className='hero-header__content__infos' width="50">
                        <Row>
                            <MainCard informations={informations} />
                        </Row>

                        <ContainerFlex className="row-portfolio-cv" width="100">
                            <PortfolioCard />
                            <CvCard src={informations['src-cv']}/>
                        </ContainerFlex>

                        <Row>
                            <ContactCard informations={informations} />
                        </Row>
                    </Container>

                    <Container className="hero-header__content__skills" width="50" height="100" align="center">
                        <SkillsList skills={skills} />
                    </Container>
                </ContainerFlex>
            </Container>
        </Container>
    )
}

export default Home
