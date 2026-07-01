// https://www.omdbapi.com/?i=tt3896198&apikey=add5cb2b
import "./App.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Results />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
