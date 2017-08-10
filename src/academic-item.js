import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class AcademicItem extends Component{

  render(){
    return (
      <div className="col-md-12">
        <div className="academic">
          <div className="row">
            <div className="col-md-3">
              <img alt="" src={this.props.image} className="img-rounded img-responsive"/>
            </div>
            <div className="col-md-9">
              <h3>{this.props.title} in {this.props.field}</h3>
              <h4>{this.props.degree}</h4>
              <p>Passed in: {this.props.year}</p>
              <p>{this.props.institute}</p>
              <p>Obtained CGPA <span className="badge">{this.props.cgpa}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AcademicItem;
