import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
          <li>
            <Link to="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;
