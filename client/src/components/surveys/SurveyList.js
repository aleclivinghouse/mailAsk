import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';



class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();

  }

  //
  // deletePost = () => {
  //       this.props.dispatch(deleteSurvey(this.props.match.params.id))
  //   }
 d

 renderSurveys() {
   console.log(this.props);
	 //reverse show the surveys by most recent
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>

            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <a  onClick={() => this.props.deleteSurvey(survey._id)} className="right">Delete</a>
            </div>
          </div>

      );
    });
  }


	render() {
		return(
			<div>{this.renderSurveys()}</div>
		);
	}
}

//here we return an object that contains our list of surveys
function mapStateToProps({ surveys }){
	return {surveys}
}

export default connect(mapStateToProps,{ fetchSurveys, deleteSurvey})(SurveyList);
