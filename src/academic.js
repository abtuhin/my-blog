import React, {Component} from 'react';
import {getData} from './data';
import AcademicItem from './academic-item';

class Academic extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: getData().academic
    }
  }
  render(){
    const {data} = this.state;
    return (
      <div>
        {
          data.map((item,i) => (
            <AcademicItem
              key={i}
              title={item.title}
              degree={item.degree}
              field={item.field}
              year={item.year}
              institute={item.institute}
              cgpa={item.cgpa}
              image={item.image}
            />
          ))
        }
      </div>
    );
  }
}

export default Academic;
