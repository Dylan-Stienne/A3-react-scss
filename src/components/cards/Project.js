import '../../sass/components/cards/_project.scss';
import Container, { ContainerFlex, If } from '../Containers'
import IconButton from '../IconButton'
import NavigatorPreview from '../NavigatorPreview'
import TechnosList from '../TechnosList'
import icon_github from '../../icons/github.svg'
import icon_gitlab from '../../icons/gitlab.svg'
import icon_share from '../../icons/share.svg'

function ProjectCard({ project }) {
    const _color = ['color-project-1', 'color-project-2', 'color-project-3'].includes(project?.color) ? project.color : 'color-project-1';

    return (
        <ContainerFlex className={`project-card ${_color}`}>
            <Container className="project-card__image" width="40" height="100" justify="center" align="center">
                <NavigatorPreview images={project.pictures} />
            </Container>

            <Container className="project-card__infos" width="60" height="100">
                <Container className="project-card__infos__head" width="100">
                    <h3 className="project-name">{project.name}</h3>
                    <h4 className="project-role">{project.role}</h4>
                </Container>
                <Container className="project-card__infos__body" width="100" height="100">
                    <p className="project-description">{project.description}</p>
                </Container>

                <ContainerFlex className="project-card__infos__foot" justify="between" align="center" width="100">
                    <ContainerFlex width="auto" className="project-card__infos__foot__technos">
                        <TechnosList technos={project.technologies} />
                    </ContainerFlex>
                    <ContainerFlex width="auto" className="project-card__infos__foot__actions">
                        <If IF={project?.github !== null}>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <IconButton color={project.color} icon={icon_github} className="action" />
                            </a>
                        </If>
                        <If IF={project?.gitlab !== null}>
                            <a href={project.gitlab} target="_blank" rel="noreferrer">
                                <IconButton color={project.color} icon={icon_gitlab} className="action" />
                            </a>
                        </If>
                        <If IF={project?.website !== null}>
                            <a href={project.website} target="_blank" rel="noreferrer">
                                <IconButton color={project.color} icon={icon_share} className="action" />
                            </a>
                        </If>
                    </ContainerFlex>
                </ContainerFlex>
            </Container>
        </ContainerFlex>
    );
}

export default ProjectCard;