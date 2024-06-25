import React from 'react';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import NullStyle from './constants/nullstyle.js';

const App = () => {
  return (
    <div className="wrapper">
      <NullStyle />
      <Main />
      <Footer />
    </div>
  );
}

export default App;