import { useState, useEffect } from 'react';
import Landing from '../components/Landing/Landing';
import Dashboard from './dashboard';
import Lobby from '../pages/lobby';
import VibePicker from '../pages/vibePicker';
import MainComponent from '../components/Main/MainComponent';
import SignInComponent from '../components/signin/SignInComponent';
import { useRouter } from 'next/router';

const Index = ({ Component, pageProps, user, setUser }) => {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('user_data');
    
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
      setCurrentPage('dashboard');
    }
  }, []);

  const handleCreatePlaylist = () => {
    setCurrentPage('lobby');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing navigateToSignIn={() => setCurrentPage('signIn')} />;
      case 'signIn':
        return <SignInComponent navigateToDashboard={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard onCreatePlaylist={handleCreatePlaylist} />;
      case 'lobby':
        return <Lobby />;
      case 'vibePicker':
        return <VibePicker />;
      case 'main':
        return <MainComponent user={user} setUser={setUser} />;
      default:
        return <Landing />;
    }
  };

  return <div>{renderCurrentPage()}</div>;
};

export default Index;
