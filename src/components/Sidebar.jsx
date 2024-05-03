import { slide as Menu } from 'react-burger-menu';

const props = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Top Page
            </a>
            <a className="menu-item" href="/About.jsx">
                About Me
            </a>
            <a className="menu-item" href="/Skills.jsx">
                Skills
            </a>
            <a className="menu-item" href="/Projects.jsx">
                Projects
            </a>
            <a className="menu-item" href="/Contact.jsx">
                Contact
            </a>
        </Menu>
    );
};

export default props;