import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Router from './components/Router/Router';

import './components/Main/Main.scss';
import './App.css';

function App() {
  return (
<>
<Header>
  <Nav />
</Header>
<Main>
  <Router/>
  </Main>
<Footer></Footer>
</>
  );
}

export default App;