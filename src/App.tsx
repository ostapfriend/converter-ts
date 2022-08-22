import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Main } from './pages/Main/Main';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ListCurrencies from './pages/ListCurrencies/ListCurrencies';


import "../node_modules/bulma/css/bulma.css";
import { Navbar } from './components/Navbar/Navbar';


export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/list-currencies" element={<ListCurrencies/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>

  );
}
