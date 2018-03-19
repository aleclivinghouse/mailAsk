//SurveyNEw shows SurveyForm and SurveyForm Review

import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';

class SurveyNew extends Component {
  //as a default, the state showFormReview = false
  state = { showFormReview: false };

  renderContent(){
    if (this.state.showFormReview) {
     return (
       <SurveyFormReview
         onCancel={() => this.setState({ showFormReview: false })}
       />
     );
   }


    return (

    <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true})} />
    );

  }



  render(){
    return (
      <div>
      {this.renderContent()}
      </div>
    );
  }
}


/*
REDUX BEHAVES THIS WAY BY DEFAULY
--if the components get unmounted, dumb all the values in the form
*/
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
