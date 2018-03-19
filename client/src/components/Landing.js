import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render(){
    return(
    <div style={{ textAlign: 'center' }}>
      <h1>
        Mail-Ask!
      </h1>
      Collect feedback from your users
      <div>
      <Link to="/surveys/new" className="red btn-flat white-text" style={{margin: 15}}>
        Create A New Survey
      </Link>
      <Link to="/surveys" className=" btn" style={{margin: 15}}>
        View Your Surveys
      </Link>
    </div>
    </div>

  );
 }
}



export default Landing;
