import { Link } from "react-router-dom";

export default function TableStudent(params) {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="p-4">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Nis
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Birth Day
            </th>
            <th scope="col" className="px-6 py-3">
              Class
            </th>
            <th scope="col" className="px-6 py-3">
              Biaya SPP
            </th>
            <th scope="col" className="px-6 py-3">
              Absensi
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">1</td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.1051xRcNw7Wko_I3zInFhwHaJq&pid=Api&rs=1&c=1&qlt=95&w=95&h=124" alt="Jese image" />
              <div className="pl-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                <div className="font-normal text-gray-500">7 tahun</div>
              </div>
            </th>
            <td className="px-6 py-4">202301170902A</td>
            <td className="px-6 py-4">Laki-Laki</td>
            <td className="px-6 py-4">17, September 2002</td>
            <td className="px-6 py-4">1A</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Done
              </div>
              {/* <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div> Pending
              </div> */}
            </td>
            <td className="px-6 py-4">
              <select
                id="countries"
                className="bg-gray-50 border border-[#548999] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose One</option>
                <option value="US">Ilmu Pengetahuan Alam</option>
                <option value="CA">Ilmu Pengetahuan Sosial</option>
                <option value="FR">Matematika</option>
                <option value="DE">Bahasa Inggris</option>
              </select>
            </td>
            <td className="px-6 py-4">
              <Link to="/scores/1">
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[#548999] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10"
                  type="button"
                >
                  Lihat Nilai
                </button>
              </Link>
              <button
                className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[blue] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 ml-[0.5rem] h-10"
                type="button"
              >
                Edit
              </button>
              <button
                className="inline-flex items-center text-gray-500 bg-white border border-[#548999] focus:outline-none hover:bg-[red] hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 ml-[0.5rem] h-10"
                type="button"
              >
                Delete
              </button>
              {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-[1rem]">
                  Edit
                </a>
                <a href="#" className="font-medium text-[red] hover:underline ml-[1rem]">
                  Delete
                </a> */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
