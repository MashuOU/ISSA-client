import { Link, useNavigation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "../components/Pagination";
import TableStudent from "../components/TableStudents";
import { classesFetch, studentById, studentsFetch } from "../store/action/ActionCreator";

export default function Dashboard(params) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const classes = useSelector((state) => state.classes.classes);

  // const numbers = [...Array(page + 1).keys()].slice(1);

  const [query, setQuery] = useState({
    ClassId: "",
    name: "",
  });

  // console.log(classes, "ini class");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

  const submitQuery = (e) => {
    e.preventDefault();
    dispatch(studentsFetch(query));
  };

  // console.log(query);

  return (
    <>
      {loading && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[18rem] w-full md:w-full sm:[50%] ">
          <div className="flex content-center justify-center my-auto ">
            <ClipLoader color={"gray-900"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        </div>
      )}
      {!loading && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[3rem] w-full md:w-full sm:[50%] ">
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 ml-6 mr-6">
            <div>
              <Link to="/addStudent">
                <button
                  className="inline-flex items-center   border-gray-900 focus:outline-none bg-gray-900 text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 :bg-gray-800 dark:bg-gray-700 h-10"
                  type="button"
                >
                  Add Murid
                </button>
              </Link>
            </div>
            <div className="flex row">
              <div className="flex items-center dark:text-white">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Hadir
              </div>

              <div className="flex items-center ml-4 dark:text-white">
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> Sakit
              </div>
              <div className="flex items-center ml-4 dark:text-white">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div> Izin
              </div>
              <div className="flex items-center ml-4 dark:text-white">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Alfa
              </div>
            </div>
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

              <option value="All">All</option>
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
                  placeholder="Type here"
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
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Nis
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Birth Day
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendances
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {Array.isArray(students.rows) &&
              students?.rows.map((el, index) => {
                return <TableStudent key={el.id} data={el} index={index} />;
              })}
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
