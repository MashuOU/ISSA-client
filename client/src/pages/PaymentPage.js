import { useDispatch, useSelector } from "react-redux";
import { snap } from "../store/actions/actionCreator";
import { useEffect, useState, useRef } from "react";

import { fetchSPP } from "../store/actions/actionCreator";

export default function PaymentPage() {
  const dispatch = useDispatch();

  const {
    student: { SPP },
  } = useSelector((state) => state);

  console.log(SPP, "katokan sajo");

  useEffect(() => {
    dispatch(fetchSPP());
  }, []);

  if (Object.keys(SPP).length) {
    return (
      <div className="  pl-4 pt-16 border-black">
        <h5 class="text-xl mb-6 font-semibold tracking-tight mt-10 text-gray-900 dark:text-white">
          {" "}
          Pembayaran{" "}
        </h5>

        {/* <button onClick={() => dispatch(snap())}>Pay</button> */}

        {/* https://midtrans.com/assets/img/midtrans-logoo.jpg?v=1676436294
        
        */}
        {/* https://midtrans.com/assets/img/midtrans-logoo.jpg?v=1676436294 */}

        <button
          onClick={() => dispatch(snap())}
          type="button"
          class=" border border-gray-400  focus:ring-4 focus:border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 inline-flex gap-2 items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        >
          <img
            src="https://midtrans.com/assets/img/midtrans-logoo.jpg?v=1676436294"
            className="h-6"
          />
          Midtrans
        </button>

        <ol class="space-y-4 w-72">
          <li>
            <div
              class="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
              role="alert"
            >
              <div class="flex items-center justify-between">
                <span class="sr-only">User info</span>
                <h3 class="font-medium">1. User info</h3>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div
              class="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
              role="alert"
            >
              <div class="flex items-center justify-between">
                <span class="sr-only">Account info</span>
                <h3 class="font-medium">2. Account info</h3>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}
