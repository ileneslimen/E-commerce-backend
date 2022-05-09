import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/authComponents/Login";

import Register from "./components/authComponents/register";
import ProductDetails from "./components/views/ProductDetails";
import SearchAppBar from "./components/views/Navigation";
import WomenList from "./components/views/WomenList";
import MenList from "./components/views/MenList";
import { useState } from "react";
import Home from "./components/views/Home";
import Admin from "./components/adminDashbord/Admin";
import Navbar from "./components/Pages/Navbar/Navbar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <SearchAppBar setSearch={setSearch}></SearchAppBar> */}
      <Routes>
        <Route path="/signUp" element={<Register></Register>} />
        <Route path="/signIn" element={<Login></Login>} />
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/men"
          element={<MenList search={search}></MenList>}
        ></Route>
        <Route
          path="/women"
          element={<WomenList search={search}></WomenList>}
        ></Route>
        <Route
          path="/ProductDetails/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>

        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
