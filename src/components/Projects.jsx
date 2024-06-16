import { projectData } from "./data.js";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>プロジェクト紹介</h2>
            <div className="project-slider">
                {projectData.map((project) => {
                    const languageParts = project.language.split('　参考文献:');
                    const languagePart = languageParts[0];
                    const referencePart = languageParts.length > 1 ? languageParts[1] : null;
                    return (
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
                            <p>{languagePart}</p>
                            {referencePart && <p>参考文献: {referencePart}</p>}
                        </div>
                    );
                })}
            </div>
            <div className="github-section">
                <h3>私のGitHubページ</h3>
                <a href="https://github.com/Retr0413" target="_blank" rel="noopener noreferrer">
                https://github.com/Retr0413
                </a>
            </div>
        </div>
    )
}

export default Projects;
