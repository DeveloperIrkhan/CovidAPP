import React from 'react'
import '../App.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav className=" navbarstyle navbar navbar-expand-lg navbar-dark p-3">
          <a className="navbar-brand font-weight-bold pl-4" href="#">Covid 19 WWC</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pr-4 text-capitalize">
              <li className="nav-item">
                <a className="nav-link" href="#update">Updates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#country">Country-wise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About COVID-19</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#symp">Symptoms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prev">Prevention</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;