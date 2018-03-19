//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//field shows any type of html element that will collect input from our user
import { reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {

//render fields is relying on us to pass in a component wuth a form tag

renderFields(){
  return (
    <div>
      <Field
      label="Survey Title"
      type="text" name="title"
      component={SurveyField}
      />

      <Field
      label="Subject Line"
      type="text" name="subject"
      component={SurveyField}
      />

      <Field
      label="Email Body"
      type="text" name="body"
      component={SurveyField}
      />

      <Field
      label="Recipient List"
      type="text" name="recipients"
      component={SurveyField}
      />
    </div>
  );
}

  //the values arrow function sends the form values to a backend server
  render(){
    return (
        <div>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
          <button type="submit" className="teal btn-flat right white-text">
              Next
        </button>

          </form>
        </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  if(!values.title){
    errors.title = 'You must provide a title';
  }

  if(!values.subject){
    errors.subject = 'You must provide a subject';
  }

  if(!values.body){
    errors.body = 'You must provide a body';
  }


  return errors;
}


export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
