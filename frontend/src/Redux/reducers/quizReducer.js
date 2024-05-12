import { SET_QUIZ_DATA} from '../actions/actionTypes';

const initialState = {
  quizData: []
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_DATA:
      return {
        ...state,
        quizData: action.payload
      };
    default:
      return state;
  }
};

export default quizReducer;
