

import { useSelector, useDispatch } from 'react-redux';
import BubbleChartDua from '../components/BubbleChartDua';
import { useEffect, useState, useRef } from 'react';

import { fetchStatistic } from '../store/actions/actionCreator';

export default function TotalNilai(props) {


  const dispatch = useDispatch()

  const {
    student: {
      statistic
    }
  } = useSelector((state) => state)

  // console.log(statistic, "ora prono");

  useEffect(() => {
    dispatch(fetchStatistic()) 
  }, [])
  
  if(!statistic.length) {
    return(
      <p>Loading</p>
    )
  }

  return (
    <>
      <div className='bg-gray-50 max-w-screen-lg mx-auto pt-10 dark:bg-gray-900 p-3 sm:p-5 '>
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> Overview </h5>

        <div className=' bg-[] rounded-2xl mt-4 grid justify-center items-center overflow-scroll border-red-800'>

          <BubbleChartDua data={statistic} />

        </div>

      </div>

    </>
  )
}