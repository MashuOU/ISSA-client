
import { useEffect, useState, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"

import { fetchStudentDetail } from '../store/actions/actionCreator';

import ScrollReveal from 'scrollreveal';

import HeatmapDua from '../components/HeatmapChartDua';



export default function AttendancePage(props) {
  const dispatch = useDispatch()

  const {
    student: { studentDetail },
  } = useSelector((state) => state);

  const { Attendances } = studentDetail

  console.log(studentDetail, 'lech');
  
  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className='bg-gray-50 max-w-screen-lg mx-auto pt-20 dark:bg-gray-900 p-3 sm:p-5 '>

        <h5 class="text-xl font-semibold mt-10 tracking-tight text-gray-900 dark:text-white"> Kehadiran </h5>

        <div className=' bg-[#fce4bb] rounded-2xl mt-4 grid items-center overflow-scroll border-red-800'>

          {/* <div className='transform scale-[2] ' > */}

          <HeatmapDua data={Attendances} />

          {/* </div> */}

        </div>

      </div>
    </>
  )
}