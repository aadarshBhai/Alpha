import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AppRouter from './router';

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <AppRouter />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default App;
