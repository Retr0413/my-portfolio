import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';

const props = () => {
    return (
        <Menu>
            <Link className="menu-item" to="frontpage" spy={true} smooth={true} duration={500}>
                Top Page
            </Link>
            <Link className="menu-item" to="about" spy={true} smooth={true} duration={500}>
                About Me
            </Link>
            <Link className="menu-item" to="skills" spy={true} smooth={true} duration={500}>
                Skills
            </Link>
            <Link className="menu-item" to="projects" spy={true} smooth={true} duration={500}>
                Projects
            </Link>
            <Link className="menu-item" to="contact" spy={true} smooth={true} duration={500}>
                Contact
            </Link>
        </Menu>
    );
};

export default props;