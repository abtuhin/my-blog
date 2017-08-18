import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component{
  render(){
    return (
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation">
          <NavLink exact activeClassName="activeNav" to="/">Home</NavLink>
        </li>
        <li role="presentation">
          <NavLink activeClassName="activeNav" to="/academic">Academic</NavLink>
        </li>
        <li role="presentation">
          <NavLink activeClassName="activeNav" to="/experience">Experience/Skills</NavLink>
        </li>
        <li role="presentation">
          <NavLink activeClassName="activeNav" to="/others">Others</NavLink>
        </li>
        <li role="presentation">
          <NavLink activeClassName="activeNav" to="/contact">Contact Me</NavLink>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
