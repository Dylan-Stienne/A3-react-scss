import mock from '../services/mock'
import Container from '../components/Containers'
import ProjectsList from '../components/ProjectsList'
import Nav from '../components/Nav'
import Translator from '../services/translate';
import '../sass/pages/_portfolio.scss';

function Portfolio() {
    const projects = mock.getMyProjects();

    return <div id='portfolio-page'>
        <Nav />
        <Container width="100" justify="center">
            <h1><Translator tid="PORTFOLIO.TITLE" /></h1>
            <ProjectsList projects={projects} />
        </Container>
    </div>
}

export default Portfolio;
