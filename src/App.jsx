import { Routes, Route, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TerminalLoadingScreen from './components/TerminalLoadingScreen';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true)
 
    return (
      <>
        {isLoading ? (
          <TerminalLoadingScreen onAnimationFinish={(done) => setIsLoading(!done) } />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
          <Analytics />
      </>
    );
}

export default App;
