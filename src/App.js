import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
// import SignUp from "./pages/SignUp/SignUp";
// import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
// import Detail from "./pages/Detail/Detail";
// import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ScrollReset from "./components/ScrollReset";

function App() {
  return (
    <div id="wrap">
      <BrowserRouter>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </div>
        <Footer/>
        <ScrollReset />
      </BrowserRouter>
    </div>
  )
}

export default App;