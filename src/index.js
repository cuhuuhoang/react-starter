import React from "react";
import ReactDOM from "react-dom/client";
import NavItem from "./components/shared/NavItem";
import {homeTab, defaultTab, itemConfigArrays} from "./config";

// build map item config
const itemConfig = {}
itemConfigArrays.forEach(item => {
  itemConfig[item.name] = {
    display: item.display,
    html: item.html
  }
})

// main app
class App extends React.Component {

  state = { activeName: defaultTab}

  onMenuClick = (e) => {
    const name = e.target.getAttribute('name');
    this.setState({activeName: name});
  }

  renderNavItems() {
    return (
      <ul className="navbar-nav mr-auto">
        {itemConfigArrays.map(item => item.name === homeTab ? "" : <NavItem activeName={this.state.activeName} key={item.name}
                   name={item.name} onClick={this.onMenuClick} displayName={item.display} />)}
      </ul>
    );
  }

  renderNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" name={homeTab} onClick={this.onMenuClick}>{itemConfig[homeTab].display}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.renderNavItems()}
          </ul>
        </div>
      </nav>
    );
  }

  renderContainer() {
    return (
      <div>
        {itemConfig[this.state.activeName].html}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderNav()}
        {this.renderContainer()}
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)