import Image from "next/image";
import { skillsData } from "./skilldata.js";

const Skills = () => {
    return (
        <div className="skills-page" >
            <div className="image-container">
                <div style={{ position: 'relative', height: '100%' }}>
                    <Image
                        src="/images/skills.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="Coding on a laptop"
                    />
                </div>
            </div>
            <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                {skillsData && skillsData.map(skill => (
                    <div className="skill-card" key={skill.id} style={ {backgroundImage: `url(${skill.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <i className={skill.icon}></i>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Skills;