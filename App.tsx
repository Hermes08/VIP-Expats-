import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import RelocationToursPage from './pages/RelocationToursPage';
import QuizPage from './pages/QuizPage';
import { Language } from './types';
import { CMSProvider } from './context/CMSContext';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  return (
    <CMSProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={
            <Layout lang={lang} setLang={setLang}>
              <Routes>
                <Route path="/" element={<HomePage lang={lang} />} />
                <Route path="/proyectos" element={<ProjectsPage lang={lang} />} />
                <Route path="/proyectos/:slug" element={<ProjectDetailPage lang={lang} />} />
                <Route path="/tours" element={<RelocationToursPage />} />
                <Route path="/sobre-nosotros" element={<AboutPage lang={lang} />} />
                <Route path="/blog" element={<BlogPage lang={lang} />} />
                <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
                <Route path="/contacto" element={<ContactPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </CMSProvider>
  );
};

export default App;