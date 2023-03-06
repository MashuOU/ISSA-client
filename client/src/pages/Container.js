
import { Outlet } from "react-router"
import Header from "../components/Header"

import Footer from "../components/Footer"
import BottomNav from "../components/BottomNav" 
export default function Container() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav/>
      <Footer />
    </>
  )
}