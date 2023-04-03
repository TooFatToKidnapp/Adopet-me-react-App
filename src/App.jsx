import { createRoot } from "react-dom/client";
import SearchParamsa from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopet Me!</h1>
      <SearchParamsa />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
