import './App.css';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import Stills from './views/Stills';
import VideoIL from './views/VideoIL';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';
import Video from './views/Video';

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
