import ProjectCard from './cards/Project'

function ProjectsList({ projects }) {
    return projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />
    })
}

export default ProjectsList;
