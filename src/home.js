import React, { Component } from 'react';

class Home extends Component{
  render(){
    return (
      <div className="row">

        <div className="col-md-4">
            <div className="project">
              <h3>Project Title</h3>
              <p>
                Its a simple periodic table app where one can search atoms based on atomic number,
                 weight or other properties selected. And by clicking on the particular atom, one
                 can see the details of the atom.
              </p>
              <a className="live-link" href="#">Project Link</a><br/><br/>
              <div className="tech-used">
                <span className="label label-danger">CSS</span>
                <span className="label label-danger">REACT JS</span>
                <span className="label label-danger">CSS</span>
                <span className="label label-danger">REACT JS</span>
                <span className="label label-danger">CSS</span>
              </div>
            </div>
        </div>
        <div className="col-md-4">
          <div className="project">
            <h3>Project Title</h3>
            <p>
              Its a simple periodic table app where one can search atoms based on atomic number,
               weight or other properties selected. And by clicking on the particular atom, one
               can see the details of the atom.
            </p>
            <a className="live-link" href="#">Project Link</a><br/><br/>
            <div className="tech-used">
              <span className="label label-danger">CSS</span>
              <span className="label label-danger">REACT JS</span>
              <span className="label label-danger">CSS</span>
              <span className="label label-danger">REACT JS</span>
              <span className="label label-danger">CSS</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project">
            <h3>Project Title</h3>
            <p>
              Its a simple periodic table app where one can search atoms based on atomic number,
               weight or other properties selected. And by clicking on the particular atom, one
               can see the details of the atom.
            </p>
            <a className="live-link" href="#">Project Link</a><br/><br/>
            <div className="tech-used">
              <span className="label label-danger">CSS</span>
              <span className="label label-danger">REACT JS</span>
              <span className="label label-danger">CSS</span>
              <span className="label label-danger">REACT JS</span>
              <span className="label label-danger">CSS</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
