import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { scheduleById, scheduleDelete, scheduleFetch } from "../store/action/ActionCreator";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Item(props) {
  const { day, data } = props;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const schedules = useSelector((state) => state.schedules.schedules);

  // // console.log(schedules.values());
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   dispatch(scheduleFetch());
  // }, []);

  const check = data?.filter((el) => el.day == day);
  console.log(check);

  const handleLessonById = (id) => {
    console.log(id);
    dispatch(scheduleById(id));
    navigate("/formSchedule");
  };

  const handleDeleteSchedule = (id) => {
    dispatch(scheduleDelete(id));
  };

  return (
    <>
      {data &&
        Array.isArray(data) &&
        check?.map((el) => {
          return (
            <>
              <div className="flex justify-between">
                <div>
                  <li className="text-black dark:text-white">{el.Lesson?.name}</li>
                </div>
                <div className="flex justify-between">
                  <p onClick={() => handleLessonById(el.id)} className="text-[#4c4cdf]  ml-3 hover:cursor-pointer">
                    edit
                  </p>
                  <p onClick={() => handleDeleteSchedule(el.id)} className="text-[red]  ml-3 hover:cursor-pointer">
                    delete
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
