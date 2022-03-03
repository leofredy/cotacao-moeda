import React from 'react';

import GlobalStyle from "./style";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
