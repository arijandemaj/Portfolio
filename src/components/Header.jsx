import { NavLink } from 'react-router-dom';
import windowIcons from '/icons/window-icons.png'

function Header() {
  return (
    <nav>
        <div id="title-bar">
            <p id="project-title">Arijan Demaj - Portfolio</p>
            <img src={windowIcons} width="80" alt="window-icons" id="window-icons"/>
        </div>
        <div id="project-tabs">
           <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-tab' : '')}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-tab' : '')}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-tab' : '')}>
                    Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>

  );
}

export default Header;


