import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableTeacher from "../components/TableTeacher";
import { teachersFetch } from "../store/action/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";

export default function Teacher(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const teachers = useSelector((state) => state.teachers.teachers);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(teachersFetch());
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
          <div className="flex content-center justify-center my-auto ">
            <ClipLoader color={"gray-900"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 ml-6 mr-6">
            <div className="ml-4 mb-10">
              <p className="font-raleway italic font-semibold text-[1.3rem] dark:text-white">List Teachers</p>
            </div>
            <div>
              <Link to="/newAdmin">
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
                  type="button"
                >
                  Add New Teacher
                </button>
              </Link>
            </div>
          </div>

          <table className="w-full text-l text-left text-gray-500 dark:text-gray-400 mt-6">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-12 py-3">
                  No
                </th>
                <th scope="col" className="px-12 py-3">
                  Name
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {teachers.map((el, index) => {
                return <TableTeacher key={el.id} data={el} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
