//SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

//history redirects to the highest parent component with a route
//finish history on actions/index
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return(
    <div>
      <h5>Please Confirm Your Entries</h5>
      <div>
       <div>
        <label>Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <label>Survey Subject</label>
      <div>{formValues.subject}</div>
       <div>
        <label>Email Body</label>
        <div>{formValues.recipients}</div>
        </div>
    </div>

      <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
        Back
      </button>

      <button className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
        >
        Send Survey
      </button>
    </div>
  );
};

/*
mapStateToProps allows us to use the connect function
to pull values out of our redux store
*/

function mapStateToProps(state){
  console.log(state);
  return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
