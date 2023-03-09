import React, { useEffect, useState } from "react";
import Editable from "./EditTable";
import { useDispatch, useSelector } from "react-redux";
import { editScores, lessonsFetch } from "../store/action/ActionCreator";

export default function TableScores(props) {
  const { data, student } = props;
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons.lessons);

  const [task, setTask] = useState("");
  const [form, setForm] = useState({
    StudentId: student.id,
    LessonId: data.Lesson.id,
    value: "",
  });

  useEffect(() => {
    dispatch(lessonsFetch());
  }, []);

  const changeInputHandler = (event) => {
    const { name, value } = event.target;

    const newForm = {
      ...form,
    };
    newForm[name] = value;

    setForm(newForm);
  };

  console.log(lessons, ">>>>form");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("boleee");
    if (form.value != "") {
      console.log("masuk nih");
      dispatch(editScores(student.id, form));
    }
    setForm({
      StudentId: student.id,
      LessonId: data.Lesson.id,
      value: "",
    });
  };

  return (
    <>
      {data && (
        <tr className="bg-white dark:bg-gray-800">
          <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {data.Assignment.name}
          </th>
          <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {data.Lesson.name}
          </th>
          <td className="px-6 py-4">{data.Lesson.KKM}</td>
          <td className="px-6 py-4">
            <Editable text={task} value={data.value} type="input">
              <form onSubmit={submitForm}>
                <input type="text" name="value" placeholder={data.value} onChange={changeInputHandler} value={form.value} />
                <button type="submit" className="ml-2 hover:text-blue-800">
                  save
                </button>
              </form>
            </Editable>
          </td>
          <td className="px-6 py-4">{data.category}</td>
          <td className="px-6 py-4 max-w-[100px]">{data.desc}</td>
        </tr>
      )}
    </>
  );
}
