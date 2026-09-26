import './App.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import videos from './videos/videos.json';
import About from './views/About';
import Home from './views/Home';
import Stills from './views/Stills';
import VideoIL from './views/VideoIL';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';
import Video from './views/Video';

// Keep the browser tab title in step with the page (matches scripts/static-pages.js).
function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [, section, id] = pathname.split('/');
    const video = section === 'videos' && videos.find((v) => v.url === id);
    const names = { about: 'About', stills: 'Stills' };
    const page = video ? video.title : names[section];
    document.title = page ? `${page} – Ohad Nir` : 'Ohad Nir';
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Router>
        <PageTitle />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stills" element={<Stills />} />
  <Route path="/videosil" element={<VideoIL />} />
          <Route path="/videos/:videoId" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
