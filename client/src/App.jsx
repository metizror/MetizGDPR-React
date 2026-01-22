import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Banner from './pages/settings/Banner';
import './App.css';

import { NavMenu } from '@shopify/app-bridge-react';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const shop = searchParams.get("shop");

  if (!shop) {
    return <Login />;
  }

  return (
    <Router>
      <NavMenu>
        <a href="/" rel="home">Pandectes GDPR</a>
        <a href="/settings">Settings</a>
        <a href="/reports">Reports</a>
        <a href="/plans">Plans</a>
        <a href="/contact">Contact</a>
      </NavMenu>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/banner" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
