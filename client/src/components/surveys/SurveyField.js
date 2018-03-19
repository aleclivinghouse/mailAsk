/*
SurveyField contains logic to render a single label and text input
This is for the email body
   --we are going to customize the label
   --we are going to save the value through the use of props
*/
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
    <input {...input}/>
    <div className="red-text" style={{marginBottom: '20px'}}>
    {touched && error}
    </div>
  </div>
  );
};
