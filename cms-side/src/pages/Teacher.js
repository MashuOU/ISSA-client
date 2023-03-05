import { Link } from "react-router-dom";

export default function Teacher(params) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        <div className="ml-4 mb-10">
          <p className="font-raleway italic font-semibold text-[1.3rem] dark:text-white">List Teachers</p>
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

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">1</td>

              <td className="px-6 py-4">Lely Farhani, S.PD</td>
              <td className="px-6 py-4">
                <Link to="/addSchedule">
                  <button
                    className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
                    type="button"
                  >
                    Add
                  </button>
                </Link>

                <Link to="/editSchedule">
                  <button
                    className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
                    type="button"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 "
                  type="button"
                >
                  DELETE
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
