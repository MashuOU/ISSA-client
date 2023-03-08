import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TableScores from "../components/TableScores";
import { lessonsFetch, studentById } from "../store/action/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";

export default function Lessons(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { studentId } = useParams();
  const student = useSelector((state) => state.students.student);

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
              <img className="w-10 h-10 rounded-full" src={student.imgUrl} alt="Jese image" />
              <div className="pl-3">
                <div className="text-base font-semibold">{student.name}</div>
              </div>
            </th>
            <div>
              <Link to="/attendance">
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
                  type="button"
                >
                  Add Scores
                </button>
              </Link>
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Lessons
                </th>
                <th scope="col" className="px-6 py-3">
                  KKM
                </th>
                <th scope="col" className="px-6 py-3">
                  Score
                </th>
                <th scope="col" className="px-6 py-3">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3">
                  Report
                </th>
              </tr>
            </thead>
            <tbody className="mb-[2rem] text-center">
              {student.Scores?.map((el) => {
                return <TableScores key={el.id} data={el} student={student} />;
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
