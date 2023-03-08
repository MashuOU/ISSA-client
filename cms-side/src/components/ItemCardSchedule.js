import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { scheduleFetch } from "../store/action/ActionCreator";

export default function Item(props) {
  const { day } = props;
  //   console.log(day);
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
  console.log(check);

  //   const result1 = schedules.filter((el) => el.day == "senin");
  //   const result2 = schedules.filter((el) => el.day == "selasa");
  //   const result3 = schedules.filter((el) => el.day == "rabu");
  //   const result4 = schedules.filter((el) => el.day == "kamis");
  //   const result5 = schedules.filter((el) => el.day == "jumat");
  //   const result6 = schedules.filter((el) => el.day == "sabtu");

  //   const temp = [result1, result2, result3, result4, result5, result6];
  //   console.log(temp);

  return (
    <>
      {check.map((el) => {
        return <li>{el.Lesson.name}</li>;
      })}
    </>
  );
}
