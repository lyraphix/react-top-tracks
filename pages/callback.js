import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAccessToken } from '../utils/auth';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchUserDataAndAccessToken = async () => {
      try {
        const tokenResponse = await getAccessToken(router.query.code);
        sessionStorage.setItem('spotify_access_token', tokenResponse.access_token);
  
        const response = await fetch('/api/handle_login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });
  
        if (response.ok) {
          const user_data = await response.json();
          sessionStorage.setItem('user_data', JSON.stringify(user_data));
          router.push('/');
        } else {
          console.error('Error handling user:', response.statusText);
        }
  
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
  
    if (router.query.code) {
      fetchUserDataAndAccessToken();
    }
  }, [router]);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default Callback;
