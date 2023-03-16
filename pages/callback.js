import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAccessToken } from '../utils/auth';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { code } = router.query;
      console.log('Router query:', router.query);

      if (code) {
        try {
          console.log('Exchanging code for access token...');
          const tokenData = await getAccessToken(code);
          console.log('Access token received:', tokenData.access_token);
          sessionStorage.setItem('spotify_access_token', tokenData.access_token); // Changed to sessionStorage
          router.push('/');
        } catch (error) {
          console.error('Error during authentication:', error);
          router.push('/');
        }
      }
    };

    handleAuth();
  }, [router.query]);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default Callback;
