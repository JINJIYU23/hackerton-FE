import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Nav from './components/Nav/Nav';
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import { RecoilRoot } from "recoil";

const Rout = () => {
    return (
        <div className="Rout">
            <BrowserRouter>
                <RecoilRoot>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/member/login" element={<Login />}></Route>
                <Route path="/member/join" element={<Join />}></Route>
            </Routes>
                </RecoilRoot>
            </BrowserRouter>
        </div>

    );
}

export default Rout;