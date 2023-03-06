import { FETCH_SCHEDULE } from "../action/ActionTypes";

const initialState = {
  schedules: [],
};

function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return {
        ...state,
        schedules: action.payload,
      };
    // case FETCH_CLASS_BYID:
    //   return {
    //     ...state,
    //     class: action.payload,
    //   };

    default:
      return state;
  }
}

export default scheduleReducer;
