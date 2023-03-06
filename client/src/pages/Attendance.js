
import { useEffect, useState, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"

import { getProductById } from '../store/actions/actionCreator';

import ScrollReveal from 'scrollreveal';

import HeatmapDua from '../components/HeatmapChartDua';



export default function AttendancePage(props) {

  const { product:
    {
      allProduct,
      productById,
      error,
      loading
    },
    category
  } = useSelector((state) => state)

  const { Attendances } = productById


  return (
    <>
      <div className='w-full h-[50vh] pt-20 bg-primary2-100  '>

        <div className='border  mt-10 h-[50vh] grid items-center overflow-scroll border-red-800'>

          {/* <div className='transform scale-[2] ' > */}

            <HeatmapDua data={Attendances} />

          {/* </div> */}

        </div>

      </div>
    </>
  )
}