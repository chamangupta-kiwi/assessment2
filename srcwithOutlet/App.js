import "./index.css";
import SignIn from "./components/SignIn";
import UserData from "./components/UserData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProctectedRoutes from "./components/ProctectedRoutes";

function App() {
  // let auth = localStorage.getItem("token")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<SignIn />}></Route>
          {/* <Route
            exact
            path="/"
            element={<ProctectedRoutes Component={UserData} />}
          ></Route> */}
          <Route exact element={<ProctectedRoutes />}>
            <Route exact path="/" element={<UserData />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
