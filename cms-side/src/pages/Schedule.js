import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { scheduleFetch } from "../store/action/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";
import Item from "../components/ItemCardSchedule";

export default function Schedule(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schedules = useSelector((state) => state.schedules.schedules);

  // console.log(schedules.values());
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(scheduleFetch());
  }, []);

  const result1 = schedules.filter((el) => el.day == "senin");
  const result2 = schedules.filter((el) => el.day == "selasa");
  const result3 = schedules.filter((el) => el.day == "rabu");
  const result4 = schedules.filter((el) => el.day == "kamis");
  const result5 = schedules.filter((el) => el.day == "jumat");
  const result6 = schedules.filter((el) => el.day == "sabtu");

  const temp = [result1, result2, result3, result4, result5, result6];
  // console.log(temp);

  const day = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

  return (
    <>
      {loading && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[18rem] w-full md:w-full sm:[50%]">
          <div className="flex content-center justify-center my-auto ">
            <ClipLoader color={"gray-900"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        </div>
      )}
      {!loading && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
          <div className="ml-4 mb-10">
            <p className="font-Comfortaa font-semibold text-[2rem] dark:text-white text-center mb-[4rem]">SCHEDULES</p>
          </div>
          <div className="mr-[35.4rem] mb-6 flex justify-end">
            <Link to="/addSchedule">
              <button
                className="inline-flex items-center   border-gray-900 focus:outline-none bg-gray-900 text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 :bg-gray-800 dark:bg-gray-700 h-10"
                type="button"
              >
                Add
              </button>
            </Link>
            <Link to="/addSchedule">
              <button
                className="inline-flex items-center   border-gray-900 focus:outline-none bg-gray-900 text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 :bg-gray-800 dark:bg-gray-700 h-10 ml-4"
                type="button"
              >
                Update
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 ">
              {day.map((el, index) => {
                return (
                  <div class="max-w-sm bg-[#d4d4d4] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{el.toUpperCase()}</h5>
                      <ul class="list-disc ml-2">
                        <Item key={el} day={el} />
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      ( )
    </>
  );
}
