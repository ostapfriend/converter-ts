import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { PageNotFound } from "./pages/PageNotFound";
import { ListCurrencies } from "./pages/ListCurrencies";

import "../node_modules/bulma/css/bulma.css";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/converter-ts" element={<Main />} />
        <Route path="/list-currencies" element={<ListCurrencies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
