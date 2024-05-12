import {SET_COURSE_CONTENT_DATA,RESET_COURSE_CONTENT_DATA} from '../actions/actionTypes';

const initialState = {
  courseContentData: []
};

const  courseContentReducer= (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_CONTENT_DATA:
      return {
        ...state,
        courseContentData: action.payload
      };
    case RESET_COURSE_CONTENT_DATA:
        return initialState;
    default:
      return state;
  }
};

export default courseContentReducer;
