//actions/index
//actions are how we send data to the redux store
import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';



//any action we throw into dispatch gets thrown to all our reducers
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    //res is the output from axios
    dispatch({type: FETCH_USER, payload: res.data});
  };


export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({type: FETCH_USER, payload: res.data});
};

//values are the values in our form
//this goes to the api/surveys route that accepts a post request at server/routes/surveyRoutes
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
//history.push pushes to the /surveys route


export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');

	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};


export const deleteSurvey = (id) => async dispatch => {
  let { data } = await axios.delete(`/api/surveys/delete/${id}`);
  dispatch({ type: FETCH_SURVEYS, payload: data });
}










//here is the way to do it using promises
/*
export const fetchUser = () => {
  return function(dispatch){
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res}))
  }
};
*/
