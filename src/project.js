import React, {Component} from 'react';

class Project extends Component{
  onClick(link){
    window.open(
      link,
      '_blank'
    );
  }
  render(){
    return (
      <div className="col-md-4">
        <div className="project">
          <h3>{this.props.title}</h3>
          <p>
            {this.props.description}
          </p>
          <a className="live-link" target="_blank" onClick={this.onClick.bind(this,this.props.link)} >{this.props.link}</a><br/><br/>
          <div className="tech-used">
            {
                this.props.tech.map((item,i) => (
                    <span key={i} className="label label-danger">{item}</span>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
