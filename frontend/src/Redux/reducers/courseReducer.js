import { SET_COURSE_DATA } from '../actions/actionTypes';

const initialState = {
  courseData: []
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_DATA:
      return {
        ...state,
        courseData: action.payload
      };
    default:
      return state;
  }
};

export default courseReducer;
