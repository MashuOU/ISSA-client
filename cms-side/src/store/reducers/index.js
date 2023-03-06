import { combineReducers } from "redux";
import classReducer from "./ClassReducer";
import scheduleReducer from "./ScheduleReducer";
import studentReducer from "./StudentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  classes: classReducer,
  schedules: scheduleReducer,
});

export default rootReducer;
