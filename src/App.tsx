import React, { useContext } from 'react';

import { LoaderContext } from './Contexts/loaderContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Loader from './components/Loader';

import GlobalStyle from "./style";

function App() {
  const { loading } = useContext(LoaderContext);
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>

      {
        loading && (
          <Loader/>
        )
      }
    </>
  );
}

export default App;
