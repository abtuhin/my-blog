import React, {Component} from 'react';

class ExperienceItem extends Component{
  onClick(link){
    window.open(
      link,
      '_blank'
    );
  }
  render(){
    return (
      <div className="col-md-12">
        <div className="academic">
          <div className="row">
            <div className="col-md-3">
              <img alt="" src={this.props.image} className="img-rounded img-responsive"/>
            </div>
            <div className="col-md-9">
              <h3>{this.props.company}</h3>
              <h4><b>{this.props.position}</b></h4>
              <p>{this.props.from} to {this.props.to}</p>
              <a className="live-link" target="_blank" onClick={this.onClick.bind(this,this.props.facebook)} >
                {this.props.facebook}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
