import { projectData } from "./data.js";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>プロジェクト紹介</h2>
            <div className="project-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <h4>{project.githubLink}</h4>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;