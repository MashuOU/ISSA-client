

import { useSelector } from 'react-redux';
import BubbleChartDua from '../components/BubbleChartDua';


export default function TotalNilai(props) {


  // const { product:
  //   {
  //     allProduct,
  //     productById,
  //     error,
  //     loading
  //   },
  //   category
  // } = useSelector((state) => state)

  // const { Attendances } = productById


  return (
    <>
      <div className='bg-gray-50 max-w-screen-lg mx-auto pt-20 dark:bg-gray-900 p-3 sm:p-5 '>

        <div className=' bg-[#fce4bb] rounded-2xl mt-4 grid justify-center items-center overflow-scroll border-red-800'>

          <BubbleChartDua />

        </div>

      </div>

    </>
  )
}