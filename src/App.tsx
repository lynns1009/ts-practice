import styles from './App.module.css';
import WelcomePage from './spreadsheet/pages/WelcomePage';
import Header from './spreadsheet/shares/header/Header';
import Footer from './spreadsheet/shares/footer/Footer';
import React from 'react';

// eslint-disabled
function App() {
  return (
    <div className={`${styles.App} ${styles.background}`}>
        <Header />
        <div style={{flex: "1 1 auto"}}>
          <WelcomePage />
        </div>
        <Footer />
    </div>
  );
}

export default App;