import TableClass from "../components/TableClass";

export default function Class(params) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        {/* <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mb-[2rem]">
          <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.1051xRcNw7Wko_I3zInFhwHaJq&pid=Api&rs=1&c=1&qlt=95&w=95&h=124" alt="Jese image" />
            <div className="pl-3">
              <div className="text-base font-semibold">Neil Sims</div>
            </div>
          </th>

          <Link to="/addLesson">
            <button
              className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
              type="button"
            >
              Input Mata Pelajaran
            </button>
          </Link>
        </div> */}
        <div className="ml-4 mb-10">
          <p className="dark:text-white font-raleway italic font-semibold text-[1.3rem] ">List Classes</p>
        </div>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400 mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-12 py-3">
                No
              </th>
              <th scope="col" className="px-12 py-3">
                Kelas
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <TableClass />
          </tbody>
        </table>
      </div>
    </>
  );
}
