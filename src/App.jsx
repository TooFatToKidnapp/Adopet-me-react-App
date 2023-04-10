import { createRoot } from "react-dom/client";
import SearchParamsa from "./SearchParams.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Details from "./Details.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Notfound from "./NotFound.jsx";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">A</Link>
      </header>
      <Outlet />
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route element={<Header />}>
            <Route path="details/:id" element={<Details />} />
            <Route path="/" element={<SearchParamsa />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
