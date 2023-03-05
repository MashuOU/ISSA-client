import { Outlet } from "react-router-dom";
import Chat from "../components/ChatBubble";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />

      {/* <aside class="fixed">
        <Sidebar />
      </aside>
      <main class="flex-1 ml-44">
        <Outlet />
      </main> */}
    </div>
  );
}
