import React, { Component } from 'react';
import {getData} from './data';
import ExperienceItem from './experience-item';
class ExperienceAchievementContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: getData().experience
    }
  }

  render(){
    const {data} = this.state;
    return (
      <div className="row">
        {
          data.map((item, i) => (
            <ExperienceItem
              key={i}
              company={item.company}
              image={item.image}
              from={item.from}
              to={item.to}
              position={item.position}
            />
          ))
        }

      </div>
    );
  }
}

export default ExperienceAchievementContainer;
