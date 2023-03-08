import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { scheduleFetch } from "../store/action/ActionCreator";

export default function Item(props) {
  const { day } = props;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schedules = useSelector((state) => state.schedules.schedules);

  // console.log(schedules.values());
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(scheduleFetch());
  }, []);

  const check = schedules.filter((el) => el.day == day);
  // console.log(check);

  return (
    <>
      {check.map((el) => {
        return <li className="text-black dark:text-white">{el.Lesson.name}</li>;
      })}
    </>
  );
}
