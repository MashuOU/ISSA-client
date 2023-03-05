import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TableScores from "../components/TableScores";
import { studentById } from "../store/action/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";

export default function Lessons(props) {
  const { studentId } = useParams();
  const student = useSelector((state) => state.students.student);
  console.log(student);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    dispatch(studentById(studentId));
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
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mb-[2rem] ml-6 mr-6">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.1051xRcNw7Wko_I3zInFhwHaJq&pid=Api&rs=1&c=1&qlt=95&w=95&h=124" alt="Jese image" />
              <div className="pl-3">
                <div className="text-base font-semibold">Neil Sims</div>
              </div>
            </th>
            {/* <div className="w-[20%]">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Sort By Type</option>
                <option value="US">Ulangan</option>
                <option value="CA">Tugas</option>
              </select>
            </div> */}
            <div>
              <Link to="/attendance">
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
                  type="button"
                >
                  Attendances
                </button>
              </Link>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="p-4">
                  Lessons
                </th>
                <th scope="col" className="px-6 py-3">
                  KKM
                </th>
                <th scope="col" className="px-6 py-3">
                  Nilai
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Report
                </th>
              </tr>
            </thead>
            <tbody className="mb-[2rem] text-center">
              {student.Scores?.map((el) => {
                return <TableScores key={el.id} data={el} />;
              })}
            </tbody>
            {/* <tfoot>
          <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">3</td>
            <td className="px-6 py-3">21,000</td>
          </tr>
        </tfoot> */}
          </table>
        </div>
      )}
    </>
  );
}
