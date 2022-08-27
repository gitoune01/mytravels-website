import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { AppProvider } from './context/appContext';
import Nav from './components/Nav';
import NavProvider from './context/providers/NavProvider';
import Toggle from './components/Toggle';
import { HelmetProvider } from 'react-helmet-async';
import Destinations from './components/Destinations';
import DestinationsProvider from './context/providers/DestinationsProvider';
import Details from './pages/Details';
import SharedProvider from './context/providers/SharedProvider';
import GalleryProvider from './context/providers/GalleryProvider';
import Contact from './pages/Contact';
import AnimationsProvider from './context/providers/AnimationsProvider';

function App() {
  return (
    <Router>
      <AppProvider>
        <NavProvider>
          <DestinationsProvider>
            <SharedProvider>
              <GalleryProvider>
                <AnimationsProvider>
                  <Toggle />
                  <Nav />
                  <HelmetProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/details/:id" element={<Details />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </HelmetProvider>
                </AnimationsProvider>
              </GalleryProvider>
            </SharedProvider>
          </DestinationsProvider>
        </NavProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
