import { Link } from "react-router-dom";
import TableSchedule from "../components/TableSchedule";

export default function Schedule(params) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        <div className="ml-4 mb-10">
          <p className="font-raleway italic font-semibold text-[1.3rem] ">List Schedules</p>
        </div>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-12 py-3">
                No
              </th>
              <th scope="col" className="px-12 py-3">
                Senin
              </th>
              <th scope="col" className="px-12 py-3">
                Selesa
              </th>
              <th scope="col" className="px-12 py-3">
                Rabu
              </th>
              <th scope="col" className="px-12 py-3">
                Kamis
              </th>
              <th scope="col" className="px-12 py-3">
                Jumat
              </th>
              <th scope="col" className="px-12 py-3">
                Sabtu
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <TableSchedule />
          </tbody>
        </table>
      </div>
    </>
  );
}
