import ByName from "./components/ByName";
import Alphabetical from "./components/Alphabetical";
import Nav from "./components/layouts/Nav";
import ByCandYear from "./components/ByCandYear"
import ByYear from "./components/ByYear";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/byname" element={<ByName />} />
          <Route path="/" element={<Alphabetical />} />
          <Route path="/yearandcategory" element={<ByCandYear />} />
          <Route path="/year" element={<ByYear />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
