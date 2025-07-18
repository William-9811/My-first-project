import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, Search, Calendar } from 'lucide-react';
import Home from './pages/Home';
import ProfileSetup from './pages/ProfileSetup';
import SkillBrowse from './pages/SkillBrowse';
import BookingFlow from './pages/BookingFlow';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/profile-setup', label: 'Profile Setup', icon: User },
    { path: '/browse', label: 'Browse Skills', icon: Search },
    { path: '/booking', label: 'Book Session', icon: Calendar },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SkillSwap
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              {navItems.map(item => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/browse" element={<SkillBrowse />} />
          <Route path="/booking" element={<BookingFlow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
