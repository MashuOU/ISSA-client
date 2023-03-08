import { Link } from "react-router-dom";

export default function TableSchedule(props) {
  const { data } = props;
  console.log(props.data);

  const result1 = data.filter((el) => el.day == "senin");
  const result2 = data.filter((el) => el.day == "selasa");
  const result3 = data.filter((el) => el.day == "rabu");
  const result4 = data.filter((el) => el.day == "kamis");
  const result5 = data.filter((el) => el.day == "jumat");
  const result6 = data.filter((el) => el.day == "sabtu");

  const temp = [result1, result2, result3, result4, result5, result6];
  // console.log(result1);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">1</td>
      {data.map((el) => {
        if (el.day == "senin")
          return (
            <td key={el.id} className="px-6 py-4">
              {el.Lesson.name}
            </td>
          );
      })}
      {data.map((el) => {
        if (el.day == "selasa")
          return (
            <td key={el.id} className="px-6 py-4">
              {el.Lesson.name}
            </td>
          );
      })}
      {/* {result1?.map((el) => {
        return (
          
        );
      })} */}
      <td className="px-6 py-4">
        <Link to="/addSchedule">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
            type="button"
          >
            Add
          </button>
        </Link>
        <Link to="/editClass">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 mr-4"
            type="button"
          >
            Edit
          </button>
        </Link>
        <button
          className="inline-flex items-center text-gray-500 bg-white border border-gray-900 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 h-10 "
          type="button"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
}
