import { useDispatch } from "react-redux";
import { useState } from "react";
import { addAttendances, editAttendance, studentById } from "../store/action/ActionCreator";
import ModalAttendances from "./ModalAttendances";

export default function TableAttendances(props) {
  const { data, index } = props;
  console.log(data, "<<<<<");
  const dispatch = useDispatch();

  const length = data.Attendances?.length - 1;
  const status = data.Attendances[length];

  console.log(data, "ini ststu");
  const temp = status?.createdAt;
  const dateNow = new Date().getDate();
  const dateData = new Date(temp).getDate();

  // console.log(dateData, dateNow);
  // console.log(temp, "<<<<<");

  const [attendances, setAttendances] = useState({
    StudentId: data.id,
    status: "",
  });

  const changeInputHandler = (event) => {
    const { name, value } = event.target;

    const newAttendances = {
      ...attendances,
    };
    newAttendances[name] = value;

    setAttendances(newAttendances);
  };

  const handleClick = () => {
    console.log("masyuk");
    if (dateData != dateNow) {
      dispatch(addAttendances(attendances));
    } else if (dateData == dateNow) {
      // console.log(attendances);
      dispatch(editAttendance(attendances));
    }
  };

  const handleStudentId = (id) => {
    // console.log(id);
    dispatch(studentById(id));
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
      <td className="w-4 p-4">{index + 1}</td>
      <th scope="row" className="flex justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src={data.imgUrl} alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">{data.name}</div>

          <div className="font-normal text-gray-900 dark:text-white">{data.age} Tahun</div>
        </div>
      </th>
      <td className="px-6 py-4 text-gray-900 dark:text-white">{data.Class.name}</td>
      <td className="px-6 py-4">
        <select
          onChange={changeInputHandler}
          onClick={handleClick}
          //   value={attendances.status}
          name="status"
          id="countries"
          className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option onClick={handleClick} selected={dateData != dateNow ? "selected" : false} disabled>
            Input Attendance
          </option>
          <option value="Hadir" selected={status?.status == "Hadir" && dateData == dateNow ? "selected" : false}>
            Hadir
          </option>
          <option value="Sakit" selected={status?.status == "Sakit" && dateData == dateNow ? "selected" : false}>
            Sakit
          </option>
          <option value="Izin" selected={status?.status == "Izin" && dateData == dateNow ? "selected" : false}>
            Izin
          </option>
          <option value="Alfa" selected={status?.status == "Alfa" && dateData == dateNow ? "selected" : false}>
            Alfa
          </option>
        </select>
      </td>
      <td onClick={() => handleStudentId(data.id)}>
        <label htmlFor={data.id} className="btn bg-gray-900 hover:bg-transparent hover:text-black dark:bg-gray-700">
          Attendance
        </label>
        <ModalAttendances data={data.Attendances} id={data.id} />
      </td>
    </tr>
  );
}
