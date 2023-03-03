import logo from "./logo.svg";
// import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App mx-auto">
      {/* <Provider store={store}> */}
      <RouterProvider router={router} />
      {/* </Provider> */}
    </div>
  );
}

export default App;
