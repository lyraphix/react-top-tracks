import { useState, useEffect } from 'react';
import Landing from '../components/Landing/Landing';
import Dashboard from './dashboard';
import Lobby from '../pages/lobby';
import VibePicker from '../pages/vibePicker';
import MainComponent from '../components/Main/MainComponent';
import SignInComponent from '../components/signin/SignInComponent';

const Index = ({ Component, pageProps, user, setUser }) => {
  const [currentPage, setCurrentPage] = useState('landing');

  // LISTENER FOR LOGGED IN STATE
  useEffect(() => {
    const handleStorageChange = (e) => {
      console.log('Storage event:', e); // Add this line to log the event
      if (e.key === 'loggedIn' && e.newValue === 'true') {
        setCurrentPage('vibePicker');
        localStorage.removeItem('loggedIn'); // Remove the flag after handling it
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  

  const handleCreatePlaylist = () => {
    setCurrentPage('lobby');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing navigateToSignIn={() => setCurrentPage('signIn')} />;     
      case 'signIn':
        return <SignInComponent navigateToLanding={() => setCurrentPage('landing')} />;    
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
