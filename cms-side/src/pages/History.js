import TableHistory from "../components/TableHistory";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historiesFetch } from "../store/action/ActionCreator";

export default function History(params) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const histories = useSelector((state) => state.histories.histories);
  console.log(histories);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    dispatch(historiesFetch());
  }, []);
  return (
    <>
      {/* {loading ? (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        <div className="flex content-center justify-center my-auto ">
          <ClipLoader color={"gray-900"} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      </div>
    ) : ( */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-6 mr-6 mt-[4rem] w-full md:w-full sm:[50%]">
        <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 ml-6 mr-6">
          <p className="dark:text-white font-raleway italic font-semibold text-[1.3rem] ">Change History</p>
        </div>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400 mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-12 py-3">
                No
              </th>
              <th scope="col" className="px-12 py-3">
                Description
              </th>
              <th scope="col" className="px-12 py-3">
                Created By
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {histories.rows?.map((el, index) => {
              return <TableHistory key={el.id} data={el} index={index} />;
            })}
          </tbody>
        </table>
      </div>
      {/* )} */}
    </>
  );
}
