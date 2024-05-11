import { SET_COURSE_DATA, SET_USER_DATA } from './actionTypes';

export const setCourseData = (data) => ({
  type: SET_COURSE_DATA,
  payload: data
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data
});
