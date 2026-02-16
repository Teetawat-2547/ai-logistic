
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Innovations from './pages/Innovations';
import CaseStudies from './pages/CaseStudies';
import TopicPage from './pages/TopicPage';
import Recommendations from './pages/Recommendations';
import References from './pages/References';
import ExtraFeatures from './pages/ExtraFeatures';
import VideoLessons from './pages/VideoLessons';
import RevenueAnalysis from './pages/RevenueAnalysis';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Route path="/tracking" element={<Tracking />} />} />
        <Route path="/revenue" element={<RevenueAnalysis />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/studies" element={<CaseStudies />} />
        <Route path="/topic" element={<TopicPage />} />
        <Route path="/videos" element={<VideoLessons />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/references" element={<References />} />
        <Route path="/features" element={<ExtraFeatures />} />
      </Routes>
    </Layout>
  );
};

export default App;
