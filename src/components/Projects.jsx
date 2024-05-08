import { projectData } from "./data.js";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>プロジェクト紹介</h2>
            <div className="project-slider">
                {projectData.map((project) => (
                    <div className="project-card"
                     key={project.id}
                     style={{
                        backgroundImage: `url(${project.backgroundImage})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: `no-repeat`
                     }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> 
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;