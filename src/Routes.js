import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Nav from './components/Nav/Nav';
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import CateOne from "./pages/Product/CateOne";
import CateTwo from "./pages/Product/CateTwo";
import CateThr from "./pages/Product/CateThr";

const Rout = () => {
    return (
        <div className="Rout">
            <BrowserRouter>

            <Nav />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/member/login" element={<Login />}></Route>
                <Route path="/member/join" element={<Join />}></Route>
                <Route path="/cate1" element={<CateOne />}></Route>
                <Route path="/cate2" element={<CateTwo />}></Route>
                <Route path="/cate3" element={<CateThr />}></Route>
            </Routes>

            </BrowserRouter>
        </div>

    );
}

export default Rout;