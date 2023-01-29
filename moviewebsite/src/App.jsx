import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetail from './components/MovieDetail'
import Home from "./components/Home";

// import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import MovieListening from "./components/MovieListening";
const App = () => {
  return (

    <div className="text-xl bg-black">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
        <Footer />
    </div>
  );
};

export default App;
