import { SET_USER_DATA, RESET_USER_DATA} from '../actions/actionTypes';

const initialState = {
  userData:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
      case RESET_USER_DATA:
        return initialState;
    default:
      return state;
  }
};

export default userReducer;
