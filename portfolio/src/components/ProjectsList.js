import ProjectCard from './ProjectCard'

function ProjectsList({ projects }) {
    return projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />
    })
}

export default ProjectsList;
