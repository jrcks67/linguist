import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';
import courseContentReducer from './courseContentReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  user:userReducer,
  courseContent:courseContentReducer,
  quiz:quizReducer
});

export default rootReducer;
