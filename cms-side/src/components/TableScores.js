export default function TableScores(props) {
  const { data } = props;

  return (
    <>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
          {data.Lesson.name}
        </th>
        <td className="px-6 py-4">{data.Lesson.KKM}</td>
        <td className="px-6 py-4">{data.value}</td>
        <td className="px-6 py-4">{data.category}</td>
        <td className="px-6 py-4 max-w-[100px]">{data.desc}</td>
      </tr>
    </>
  );
}
