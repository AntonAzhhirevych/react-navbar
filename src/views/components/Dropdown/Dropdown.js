import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuConfig } from '../menuConfig';
import './Dropdown.css';

function Dropdown() {
  const [dropdawnStatus, setDropdawnStatus] = useState(false);

  return (
    <ul
      onClick={() => setDropdawnStatus(!dropdawnStatus)}
      className={dropdawnStatus ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {menuConfig.map(({ title, path }) => {
        return (
          <li key={title}>
            <Link
              className="dropdown-link"
              to={path}
              onClick={() => setDropdawnStatus(false)}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
