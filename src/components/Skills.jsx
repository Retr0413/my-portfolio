import Image from "next/image";

const Skills = () => {
    return (
        <div className="skills-page" >
            <div className="image-container">
                <Image src='/images/skills.jpg' width={950} height={800} />
            </div>
            <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card c">
                    <i className="fa-brands fa-c c-icon"></i>
                    <p>C++</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills;