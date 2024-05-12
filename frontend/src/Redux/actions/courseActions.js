import { 
  SET_COURSE_CONTENT_DATA, 
  SET_COURSE_DATA, 
  SET_USER_DATA,
  RESET_USER_DATA,
  RESET_COURSE_CONTENT_DATA,
  SET_SPECIFIC_COURSE_DETAILS,
  SET_QUIZ_DATA} from './actionTypes';

export const setCourseData = (data) => ({
  type: SET_COURSE_DATA,
  payload: data
});

export const setCourseContentData = (data) => ({
  type: SET_COURSE_CONTENT_DATA,
  payload: data
});

export const resetCourseContentData = () => ({
  type: RESET_COURSE_CONTENT_DATA,
});

export const setQuizData = (data) => ({
  type: SET_QUIZ_DATA,
  payload: data
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});


