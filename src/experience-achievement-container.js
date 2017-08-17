import React, { Component } from 'react';
import {getData} from './data';
import ExperienceItem from './experience-item';
import Skill from './skill-item';
class ExperienceAchievementContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: getData().experience,
      skills: getData().skills,
      tools: getData().tools,
      interests: getData().interests
    }
  }

  render(){
    const {data, skills, tools, interests} = this.state;
    return (
      <div>
        <div className="page-header">
          <h1>Experience</h1>
        </div>
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
              facebook={item.facebook}
            />
          ))
        }
        </div>

        <br/><br/>

        <div className="page-header">
          <h1>Achievement</h1>
        </div>
        <div className="row" style={{margin:'0.2rem'}}>
          Achievement will be here
        </div>

        <br/><br/>



        <div className="page-header">
          <h1>Skills</h1>
        </div>
        <div className="row" style={{margin:'0.2rem'}}>
        {
          skills.map((item, i) => (
            <Skill
              key={i}
              name={item.name}
              level={item.level}
            />
          ))
        }
        </div>
        <br/><br/>
        <div className="row" style={{margin:'0.2rem'}}>
          <div className="col-md-6">
            <h4>Tools</h4><hr/>
            <ul className="tools">
            {
              tools.map((item, i) => (
                  <li key={i}>
                    <h5><p>{item}</p></h5>
                  </li>
              ))
            }
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Interests</h4><hr/>
            <ul className="tools">
            {
              interests.map((item, i) => (
                  <li key={i}>
                    <h5><p>{item}</p></h5>
                  </li>
              ))
            }
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default ExperienceAchievementContainer;
