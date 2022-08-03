import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
// fgfgfgfg

export default App;
