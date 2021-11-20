import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./pages/Home";
import PlaceBid from "./pages/PlaceBid";
import FAQ from "./pages/Faq";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/place" element={<PlaceBid />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
