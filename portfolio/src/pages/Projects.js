import mock from '../services/mock'
import Container from '../components/Containers'
import ProjectsList from '../components/ProjectsList'
import Nav from '../components/Nav'

function Projects() {
    const projects = mock.getMyProjects();

    return <>
        <Nav />
        <Container width="100" justify="center">
            <ProjectsList projects={projects} />
        </Container>
    </>
}

export default Projects;
