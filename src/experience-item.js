import React, {Component} from 'react';

class ExperienceItem extends Component{

  render(){
    return (
      <div className="col-md-4">
        <div className="experience">
          {this.props.company}
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
