import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {SignUp} from "./view/pages/SignUp/SignUp";
import {AccountCenter} from "./view/pages/UserAccountCenter/AccountCenter";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" Component={DefaultLayout}></Route>
              <Route path="/sign" Component={Login}></Route>
              <Route path="/signUp" Component={SignUp}></Route>
              <Route path="/user" Component={AccountCenter}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;