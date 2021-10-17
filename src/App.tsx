import './App.css';
import WelcomePage from './spreadsheet/pages/WelcomePage';
import Header from './spreadsheet/shares/header/Header';
import Footer from './spreadsheet/shares/footer/Footer';
import React from 'react';

// eslint-disabled
function App() {
  return (
    <div className="App">
        <Header />
        <WelcomePage />
        <Footer />
    </div>
  );
}

export default App;