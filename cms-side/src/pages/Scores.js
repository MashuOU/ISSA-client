import { Link } from "react-router-dom";

export default function Scores(params) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-[20rem] mt-[7rem] w-full md:w-full sm:[50%]">
        <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mb-[2rem]">
          <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.1051xRcNw7Wko_I3zInFhwHaJq&pid=Api&rs=1&c=1&qlt=95&w=95&h=124" alt="Jese image" />
            <div className="pl-3">
              <div className="text-base font-semibold">Neil Sims</div>
            </div>
          </th>
          {/* <div className="w-[20%]">
            <select
              id="countries"
              className="bg-gray-50 border border-[#548999] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Sort By Lesson</option>
              <option value="US">Ilmu Pengetahuan Alam</option>
              <option value="CA">Ilmu Pengetahuan Sosial</option>
              <option value="FR">Matematika</option>
              <option value="DE">Bahasa Inggris</option>
            </select>
          </div> */}
          <Link to="/addLesson">
            <button
              className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
              type="button"
            >
              Input Mata Pelajaran
            </button>
          </Link>
        </div>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-12 py-3">
                No
              </th>
              <th scope="col" className="px-12 py-3">
                Mata Pelajaran
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">1</td>

              <td className="px-6 py-4">Ilmu Pengetahuan Alam</td>
              <td className="px-6 py-4">
                <Link to="/scores/1/1">
                  <button
                    className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
                    type="button"
                  >
                    Lihat Detail
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
