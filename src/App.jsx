import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import AppRouter from './router';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/home.css';
import './styles/about.css';
import './styles/courses.css';
import './styles/testimonials.css';
import './styles/gallery.css';
import './styles/contact.css';

const App = () => {
  return (
    <LanguageProvider>
      <div className="app-root">
        <Navbar />
        <LanguageToggle />
        <main className="app-main">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
