import { useState, useEffect } from 'react';
import Landing from '../components/Landing/Landing';
import Dashboard from './dashboard';
import SignInComponent from '../components/signin/SignInComponent';

const Index = ({ Component, pageProps, user, setUser }) => {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('user_data');
    
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData.isLoggedIn) {
        setUser(parsedUserData);
        setCurrentPage('dashboard');
      }
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
        return <Dashboard user={user} setUser={setUser} onCreatePlaylist={handleCreatePlaylist} />;
      default:
        return <Landing navigateToSignIn={() => setCurrentPage('signIn')} />;
    }
  };

  return <div>{renderCurrentPage()}</div>;
};

export default Index;
