import { useDispatch } from "react-redux";
import { useState } from "react";
import { addAttendances } from "../store/action/ActionCreator";

export default function TableAttendances(props) {
  const { data, index } = props;
  const dispatch = useDispatch();
  const length = data.Attendances.length - 1;
  const status = data.Attendances[length];
  //   console.log(data.Attendances[length]);

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

  console.log(attendances);

  const handleClick = () => {
    console.log("masyuk");
    if (attendances.status) {
      dispatch(addAttendances(attendances));
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
      <td className="w-4 p-4">{index + 1}</td>
      <th scope="row" className="flex justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src={data.imgUrl} alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">{data.name}</div>
          <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
          <div className="font-normal text-gray-500">{data.age} Tahun</div>
        </div>
      </th>

      <td className="px-6 py-4">
        <select
          onChange={changeInputHandler}
          onClick={handleClick}
          //   value={attendances.status}
          name="status"
          id="countries"
          className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option onClick={handleClick} value="Hadir" selected={status.status == "Hadir" ? "selected" : false}>
            Hadir
          </option>
          <option onClick={handleClick} value="Sakit" selected={status.status == "Sakit" ? "selected" : false}>
            Sakit
          </option>
          <option onClick={handleClick} value="Izin" selected={status.status == "Izin" ? "selected" : false}>
            Izin
          </option>
          <option onClick={handleClick} value="Alfa" selected={status.status == "Alfa" ? "selected" : false}>
            Alfa
          </option>
        </select>
      </td>
      {/* <td className="px-6 py-4">
        <button
          className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-[blue] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 ml-[0.5rem] h-10"
          type="button"
        >
          Edit
        </button>
      </td> */}
    </tr>
  );
}
