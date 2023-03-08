import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentById, studentsFetch } from "../store/action/ActionCreator";

export default function ModalAttendances(props) {
  const { data, id } = props;

  const myModal = id;
  console.log(data, "ini data");

  const day = data.map((el) => {
    console.log(new Date(el.updatedAt).toLocaleString("id-ID", { weekday: "long" }));
  });

  //   const dispatch = useDispatch();
  //   const student = useSelector((state) => state.students.student);
  //   const students = useSelector((state) => state.students.students);

  //   console.log(student, " student nih");
  //   useEffect(() => {
  //     dispatch(studentsFetch());
  //   }, []);

  return (
    <>
      <>
        <input type="checkbox" id={myModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            {data.map((el) => {
              return (
                <>
                  <div className="flex justify-center">
                    <div className="mr-16">
                      <h3 className="text-lg text-black">{new Date(el.updatedAt).toLocaleString("id-ID", { weekday: "long" })}</h3>
                    </div>
                    <div>
                      <h3 className="text-lg text-blue-800">{el.status}</h3>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="modal-action">
              <label htmlFor={id} className="btn bg-gray-900 hover:bg-transparent hover:text-black">
                back
              </label>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
