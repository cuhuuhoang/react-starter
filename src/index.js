import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {menuConfigs} from "./config";
import history from "./history";

// build map item config
const menuMap = {}
menuConfigs.forEach(menuConfig => {
  menuMap[menuConfig.name] = {
    display: menuConfig.display,
    html: menuConfig.html
  }
})

// main app
const BaseApp = () => {

  const [activePath, setActivePath] = useState(window.location.pathname.split('/')[1]);
  const [navOpen, setNavOpen] = useState(false);
  const homeMenu = menuConfigs[0];

  const onMenuClick = (menuConfig) => {
    pushPath(menuConfig.name);
  }

  const pushPath = (path) => {
    window.history.pushState({}, '', path);
    history.push('/' + path);
    if (path === '/') {
      path = '';
    }
    setActivePath(path);
  }

  const renderNavMenus = menuConfigs.map(menuConfig => {
    return menuConfig.name === homeMenu.name ? "" :
      <li className={`nav-item ${activePath === '/' + menuConfig.name ? "active" : ""}`} key={menuConfig.name}>
        <a className="nav-link" name={menuConfig.name} onClick={() => onMenuClick(menuConfig)}>
          {menuConfig.display}
        </a>
      </li>
  });

  const renderNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" name={homeMenu.display} onClick={() => pushPath('/')}>{homeMenu.display}</a>
        <button className="navbar-toggler" type="button" onClick={() => setNavOpen(true)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} onClick={() => setNavOpen(false)}>
          <ul className="navbar-nav mr-auto">
            {renderNavMenus}
          </ul>
        </div>
      </nav>
    );
  }


  return (
    <div className="container">
      {renderNav()}
      {menuMap[activePath] ? menuMap[activePath].html : <h1>Path not found :(</h1>}
    </div>
  );

}

ReactDOM.createRoot(document.getElementById('root')).render(<BaseApp />)