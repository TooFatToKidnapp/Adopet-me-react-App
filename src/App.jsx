import { createRoot } from "react-dom/client";
import SearchParamsa from "./SearchParams.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="details/:id" element={<Details />} />
        <Route path="/" element={<SearchParamsa />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
