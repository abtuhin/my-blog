import React, {Component} from 'react';

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages:''
    }
  }
  submit = () => {
    this.setState({
      messages: 'Your message has been successfully send.'
    });
  }

  render(){
    return (
      <div>
        <div className="page-header">
          <h1>Conact Me</h1>
        </div>
        <br/>
        {
          this.state.messages!==''?
          <div className="alert alert-success" role="alert">
            {this.state.messages}<br/>
          </div>:null
        }

        <form name="form" method="POST" action="http://formspree.io/5tuhin.sust@gmail.com">
          <div className="form-group">
            <label for="email-id">Email address</label>
            <input type="email" name="email" className="form-control" id="email-id" placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <label for="details">Write Your Message</label>
            <textarea name="message" className="form-control" rows="5"></textarea>
          </div>
          <button onClick={this.submit} type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    );
  }
}

export default ContactMe;
