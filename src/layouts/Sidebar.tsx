import {NavLink} from "react-router-dom";
import './Sidebar.css';

function Sidebar() {

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to='/home' className='nav-link'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/openai' className='nav-link'>OpenAI</NavLink>
          </li>
          <li>
            <NavLink to='/settings' className='nav-link'>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;