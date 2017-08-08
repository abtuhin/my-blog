import React, { Component } from 'react';

class Nav extends Component{
  render(){
    return (
      <div className="well">
        <div className="container">
          <div className="row">
            <div className="col-md-4 intro">
              <img alt="" src="tuhin.jpg" className="img-circle img-responsive" width="220"/>
              <h3>Abdullah-Al-Mosabbir</h3>
              </div>
            <div className="col-md-8 address">
              <i>Address: Jahangirnagar, Savar, Dhaka</i><br/>
              <i>Mobile: 01928556438</i><br/>
              <i>Email: tuhin9pro@gmail.com</i><br/>
              <i>Github: https://github.com/abtuhin</i><br/>
              <i>Linkedin: https://www.linkedin.com/in/abdullah-al-mosabbir-tuhin-000497131</i><br/>
              <i>Facebook: https://www.facebook.com/abdullahalmosabbir</i><br/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
