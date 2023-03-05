import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TableScores from "../components/TableScores";
import { studentById } from "../store/action/ActionCreator";

export default function Lessons(props) {
  const { studentId } = useParams();
  const student = useSelector((state) => state.students.student);
  console.log(student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentById(studentId));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
      <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mb-[2rem]">
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.1051xRcNw7Wko_I3zInFhwHaJq&pid=Api&rs=1&c=1&qlt=95&w=95&h=124" alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">Neil Sims</div>
          </div>
        </th>
        <div className="w-[20%]">
          <select
            id="countries"
            className="bg-gray-50 border border-[#548999] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Sort By Type</option>
            <option value="US">Ulangan</option>
            <option value="CA">Tugas</option>
          </select>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 mb-[1rem]">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Lessons
            </th>
            <th scope="col" className="px-6 py-3">
              KKM
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Nilai
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Category
            </th>{" "}
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Report
            </th>
          </tr>
        </thead>
        <tbody className="mb-[2rem]">
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
  );
}
