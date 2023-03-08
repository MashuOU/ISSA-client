
import { Outlet } from "react-router"
import Header from "../components/Header"

import Footer from "../components/Footer"
import BottomNav from "../components/BottomNav" 
import { fetchStudentDetail } from "../store/actions/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export default function Container() { 
  const dispatch = useDispatch()
  
  const {
    student: { studentDetail },
  } = useSelector((state) => state);
  
  
  useEffect(() => {  
    if(!Object.keys(studentDetail).length) {
      dispatch(fetchStudentDetail())
    } 
  }, []);
  
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav/>
      {/* <Footer /> */}
    </>
  )
}