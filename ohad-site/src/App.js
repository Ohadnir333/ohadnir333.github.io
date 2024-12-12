import './App.css';
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router"
import About from './views/About'
import Home from './views/Home'
import Stills from './views/Stills'
import NotFound from './views/NotFound';
import Navigation from './components/Navigation'
import Video from './views/Video'

function App() {
  return (
    
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stills" element={<Stills />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/videos/:videoId" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
