import React from "react";
import "./Style/App.css";
import Navbar from "./Components/Navbar/Navbar";
import Box from "./Components/Navbar/Box";
import Search from "./Components/Navbar/Search";
import Category from "./Components/Navbar/Category";
import { Hotels } from "./Components/Navbar/Hotels";
import Announcement1 from "./Components/Navbar/Announcement1";
import Announcement2 from "./Components/Navbar/Announcement2";
import Guide from "./Components/Navbar/Guide";
import Sign from "./Components/Navbar/Sign";
import Footer from "./Components/Navbar/Footer";

const App = () => {
  return (
    <div className="container">
      {/* <Navbar />
      <Box />
      <Search />
      <Category />
      <Hotels />
      <Announcement1 />
      <Guide />
      <Announcement2 />
      <Sign />
      <Footer /> */}
    </div>
  );
};

export default App;
