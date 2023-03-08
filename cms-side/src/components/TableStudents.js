import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { studentById, studentDelete } from "../store/action/ActionCreator";

export default function TableStudent(props) {
  const { data, index } = props;
  // console.log(data, "<<<<<<<");
  const dispatch = useDispatch();

  const temp = data.Attendances?.map((el) => {
    return el.createdAt;
  });

  const status = data.Attendances.map((el) => {
    return el.status;
  });

  const date = new Date();
  const dateNow = date.getDate();
  const length = temp.length - 1;
  const resultDate = new Date(temp[length]).getDate();
  const resultStatus = status[length];

  // const handleStudentById = () => {
  //   dispatch(studentById(studentId));
  // };

  const handleStudentById = (id) => {
    dispatch(studentById(id));
  };

  const handleDelete = (id) => {
    dispatch(studentDelete(id));
  };

  return (
    <tbody className="text-center">
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">{index + 1}</td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src={data.imgUrl} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{data.name}</div>
            <div className="font-normal text-gray-900 dark:text-white">neil.sims@flowbite.com</div>
            <div className="font-normal text-gray-900 dark:text-white">{data.age} Tahun</div>
          </div>
        </th>
        <td className="px-6 py-4 text-gray-900 dark:text-white">{data.NIM}</td>
        <td className="px-6 py-4 text-gray-900 dark:text-white">{data.gender}</td>
        <td className="px-6 py-4 text-gray-900 dark:text-white">{data.birthDate.substring(0, 10)}</td>
        <td className="px-6 py-4 text-gray-900 dark:text-white">{data.Class.name}</td>
        <td className="px-6 py-4 text-gray-900 dark:text-white flex justify-center">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Done
          </div>
          {/* <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div> Pending
              </div> */}
        </td>
        <td className="px-6 py-4 justify-center">
          {dateNow == resultDate && resultStatus == "Hadir" && (
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
            </div>
          )}
          {dateNow == resultDate && resultStatus == "Sakit" && (
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div>
            </div>
          )}
          {dateNow == resultDate && resultStatus == "Izin" && (
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
            </div>
          )}
          {dateNow == resultDate && resultStatus == "Alfa" && (
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div>
            </div>
          )}
          {dateNow != resultDate && (
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div>
            </div>
          )}
        </td>
        <td className="px-6 py-4">
          <Link to={`/scores/${data.id}`}>
            <button
              className="inline-flex items-center text-gray-900 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
              type="button"
            >
              See Score
            </button>
          </Link>
          <Link to="/addStudent">
            <button
              onClick={() => handleStudentById(data.id)}
              className="inline-flex items-center text-gray-900 bg-white border border-gray-900 focus:outline-none hover:bg-[blue] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 ml-[0.5rem] h-10"
              type="button"
            >
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(data.id)}
            className="inline-flex items-center text-gray-900 bg-white border border-gray-900 focus:outline-none hover:bg-[red] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 ml-[0.5rem] h-10"
            type="button"
          >
            Delete
          </button>
          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-900 hover:underline ml-[1rem]">
                  Edit
                </a>
                <a href="#" className="font-medium text-[red] hover:underline ml-[1rem]">
                  Delete
                </a> */}
        </td>
      </tr>
    </tbody>
  );
}
