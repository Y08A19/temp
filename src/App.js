import Login from "./login/login";
import "./login/logscr/log.css";
import Home from "./home"
import Rgform from "./Rgform";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  function getuserpass(user,pass)
  {

  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login data={getuserpass} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<Rgform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
