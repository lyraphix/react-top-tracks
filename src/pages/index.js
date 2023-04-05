import { useState } from 'react';
import Landing from '../components/Landing/Landing';
import Dashboard from '../pages/dashboard';
import Lobby from '../pages/lobby';
import VibePicker from '../pages/vibePicker';
import MainComponent from '../components/Main/MainComponent';

const Index = ({ Component, pageProps, user, setUser }) => {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleCreatePlaylist = () => {
    setCurrentPage('lobby');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing />;
      case 'dashboard':
        return <Dashboard onCreatePlaylist={handleCreatePlaylist} />
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

  return (
    <div>
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
