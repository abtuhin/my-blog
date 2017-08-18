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
      interests: getData().interests,
      achievements: getData().achievements
    }
  }

  render(){
    const {data, skills, tools, interests, achievements} = this.state;
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

          {
            achievements.map((item,i) => (
              <div key={i} className="achievement">
                <h3>{item.about}</h3>
                <div className="col-md-6">
                  <div>
                    <h5>
                      <b>Title:</b> {item.topic}
                      {/*<ul>
                        {
                          item.authors.map((author, j) => (
                            <li key={j}>{author.name}</li>
                          ))
                        }
                      </ul>
                      */}
                    </h5>
                    <h5><b>Data Source:</b> {item.dataSource}</h5>
                    <h5><b>Classifier Used:</b>
                      {
                        item.classifiers.map((classifier, j) => (
                          <span className="tags" key={j}>
                            {classifier+", "}
                          </span>
                        ))
                      }
                    </h5>
                    <h5><b>ML Technique</b></h5>
                    <ul>
                      {
                        item.machineLearning.map((ml,j) => (
                          <li key={j}>{ml}</li>
                        ))
                      }
                    </ul>
                    <h5><b>Models</b></h5>
                    <ul>
                      {
                        item.testModel.map((model,j) => (
                          <li key={j}>{model}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5><b>Authors</b></h5>
                  <ul>
                    {
                      item.authors.map((author,j) => (
                        <li key={j}>
                          {author.name}<br/> <i>{author.subject} at {author.institute}</i>
                        </li>
                      ))
                    }
                  </ul>

                  <h5><b>Supervisors</b></h5>
                  <ul>
                    {
                      item.supervisors.map((author,j) => (
                        <li key={j}>
                          {author.name}<br/> <i>{author.post}, {author.subject} at {author.institute}</i>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }

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
