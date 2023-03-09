import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableAttendances from "../components/TableAttendance";
import { studentsFetch, classesFetch } from "../store/action/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigation } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function Attendance(props) {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  const [loading, setLoading] = useState(false);

  console.log(students, "ini student");

  const navigate = useNavigation();
  const classes = useSelector((state) => state.classes.classes);
  const [query, setQuery] = useState({
    ClassId: "",
    name: "",
  });

  // console.log(query, "ini query");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    dispatch(studentsFetch());
    dispatch(classesFetch());
  }, []);

  const changeInputHandler = (event) => {
    const { name, value } = event.target;

    const newQuery = {
      ...query,
    };
    newQuery[name] = value;

    setQuery(newQuery);
  };

  console.log(query);
  const submitQuery = (e) => {
    e.preventDefault();
    dispatch(studentsFetch(query));
  };

  return (
    <>
      {loading ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[18rem] w-full md:w-full sm:[50%]">
          <div className="flex content-center justify-center my-auto ">
            <ClipLoader color={"gray-900"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[2rem] w-full md:w-full sm:[50%] ">
          {/* <p className="dark:text-white font-raleway italic font-semibold text-[1.3rem]  ml-10 ">Attendances</p> */}
          <div className="flex items-center justify-center pb-4 bg-white dark:bg-gray-900">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-7/12 mb-12 md:mb-[5rem] ">
              <div className="w-[70%] mask mask-squircle mx-auto">
                <img src="https://res.cloudinary.com/dslzpyibe/image/upload/v1678271532/assets%20finalproject/undraw_Process_re_gws7_jhcurm.png" />
              </div>
              <p className="dark:text-white font-Comfortaa font-semibold text-[1.3rem] text-center mt-6">ATTENDANCES</p>
            </div>
          </div>
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 w-[50%] mx-auto">
            <select
              value={query.ClassId}
              onChange={changeInputHandler}
              onClick={submitQuery}
              name="ClassId"
              id="countries"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="All">
                Sort By Class
              </option>
              <option selected value="All">
                All
              </option>
              {classes.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            <div className="flex justify-between">
              <div>
                <input
                  onChange={changeInputHandler}
                  value={query.name}
                  type="text"
                  name="name"
                  placeholder="Search By Name"
                  className="input input-bordered  max-w-xs block p-2 pl-10 text-sm text-gray-900 border border-gray-900 rounded-lg w-80 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
                />
              </div>
              <div className="ml-4">
                <button
                  onClick={submitQuery}
                  className="inline-flex items-center  dark:bg-gray-700 border border-gray-900 focus:outline-none bg-gray-900 text-white dark:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 :bg-gray-800  h-10"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <table className="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400  mx-auto mt-[2rem] items-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendances
                </th>
                <th scope="col" className="px-6 py-3">
                  History Attendances
                </th>
                {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
              </tr>
            </thead>
            <tbody className="text-center ">
              {students.rows?.map((el, index) => {
                return <TableAttendances key={el.id} data={el} index={index} />;
              })}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="mb-[5rem]">
            <Pagination data={students} />
          </div>
        </div>
      )}
    </>
  );
}
