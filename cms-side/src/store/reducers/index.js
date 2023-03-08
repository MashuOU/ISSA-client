import { combineReducers } from "redux";
import classReducer from "./ClassReducer";
import historyReducer from "./HistoryReducer";
import lessonReducer from "./LessonReducer";
import scheduleReducer from "./ScheduleReducer";
import studentReducer from "./StudentReducer";
import teacherReducer from "./TeacherReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  classes: classReducer,
  schedules: scheduleReducer,
  teachers: teacherReducer,
  lessons: lessonReducer,
  histories: historyReducer,
});

export default rootReducer;
