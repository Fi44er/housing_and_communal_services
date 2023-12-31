import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/page";
import Reg from "./pages/reg/page";
import LkUser from "./pages/lk_user/page";
import News from "./pages/news/page";
import Jkx from "./pages/o_jkx/page";
import Schedule from "./pages/schedule/Schedule";
import Contacts from "./pages/contacts/contatcs";

function App() {
  let authenticated;
  if (!localStorage.getItem("token")) {
    authenticated = false;
  } else {
    authenticated = true;
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/"
            element={<ProtectedRoute authenticated={authenticated} />}
          >
            <Route path="/lk_user" element={<LkUser />} />
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="/jkh" element={<Jkx />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
