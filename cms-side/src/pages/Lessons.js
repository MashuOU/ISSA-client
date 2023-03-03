export default function Lessons(params) {
  return (
    <>
      <div className="relative overflow-x-auto ml-[20rem] mt-[7rem] w-full md:w-full sm:[50%]">
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
                Type
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
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                Ulangan
              </th>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">80</td>
              <td className="px-6 py-4">B</td>
              <td className="px-6 py-4 max-w-[100px]">Perlu Ditingkatkan Ketelitiannya lagi ya, overal sudah bagus</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                Tugas
              </th>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">90</td>
              <td className="px-6 py-4">A</td>
              <td className="px-6 py-4 max-w-[70px]">Dipertahankan!!</td>
            </tr>
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
    </>
  );
}
