import React, { Component } from 'react';
import {getData} from './data';
import Project from './project';
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: getData().project
    }
  }

  render(){
    const {data} = this.state;
    return (
      <div>
        <div className="page-header">
          <h1>Project Showcasing</h1>
        </div>
        {
          data.map((item,i)=>(
            <Project
              key={i}
              title={item.title}
              description = {item.description}
              link = {item.link}
              tech = {item.tech}
            />
          ))
        }
      </div>
    );
  }
}

export default Home;
