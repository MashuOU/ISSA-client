import React, { useState } from "react";
import Editable from "./EditTable";

export default function TableScores(props) {
  const { data } = props;
  const [task, setTask] = useState("");

  return (
    <>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
          <Editable text={task} value={data.Lesson.name} type="input">
            <input type="text" name="task" placeholder={data.Lesson.name} value={task} onChange={(e) => setTask(e.target.value)} />

            {/* <input type="text" name="task" placeholder="Write a task name" value={task} onChange={(e) => setTask(e.target.value)} /> */}
          </Editable>
        </th>
        <td className="px-6 py-4">{data.Lesson.KKM}</td>
        <td className="px-6 py-4">
          <Editable text={task} value={data.value} type="input">
            <input type="text" name="task" placeholder={data.value} value={task} onChange={(e) => setTask(e.target.value)} />

            {/* <input type="text" name="task" placeholder="Write a task name" value={task} onChange={(e) => setTask(e.target.value)} /> */}
          </Editable>
        </td>
        <td className="px-6 py-4">
          <Editable text={task} value={data.category} type="input">
            <input type="text" name="task" placeholder={data.category} value={task} onChange={(e) => setTask(e.target.value)} />

            {/* <input type="text" name="task" placeholder="Write a task name" value={task} onChange={(e) => setTask(e.target.value)} /> */}
          </Editable>
        </td>
        <td className="px-6 py-4 max-w-[100px]">
          <Editable text={task} value={data.desc} type="input">
            <input type="text" name="task" placeholder={data.desc} value={task} onChange={(e) => setTask(e.target.value)} />

            {/* <input type="text" name="task" placeholder="Write a task name" value={task} onChange={(e) => setTask(e.target.value)} /> */}
          </Editable>
        </td>
      </tr>
    </>
  );
}
