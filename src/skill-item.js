import React, {Component} from 'react';

class Skill extends Component {
  render(){
    return (
      <button className="btn btn-danger skill" type="button">
        {this.props.name} <span className="badge">{this.props.level}</span>
      </button>
    );
  }
}

export default Skill;
