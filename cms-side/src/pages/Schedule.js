import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableSchedule from "../components/TableSchedule";
import { scheduleFetch } from "../store/action/ActionCreator";

export default function Schedule(props) {
  const dispatch = useDispatch();
  const schedules = useSelector((state) => state.schedules.schedules);

  const result1 = schedules.filter((el) => el.day == "senin");
  const result2 = schedules.filter((el) => el.day == "selasa");
  const result3 = schedules.filter((el) => el.day == "rabu");
  const result4 = schedules.filter((el) => el.day == "kamis");
  const result5 = schedules.filter((el) => el.day == "jumat");
  const result6 = schedules.filter((el) => el.day == "sabtu");

  const temp = [result1, result2, result3, result4, result5, result6];
  // console.log(result1);

  useEffect(() => {
    dispatch(scheduleFetch());
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        <div className="ml-4 mb-10">
          <p className="font-raleway italic font-semibold text-[1.3rem] dark:text-white ">List Schedules</p>
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
            <TableSchedule data={schedules} />
          </tbody>
        </table>
      </div>
    </>
  );
}
