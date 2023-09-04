import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-[105px] pb-[55px]">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
