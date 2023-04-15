import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAccessToken } from '../utils/auth';
import Center from '@/components/active/_center';
import styles from '@/styles/callback.module.css';
import Spinner from '@/components/_loadingscreen';

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
          user_data.isLoggedIn = true;
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
    <div className={styles.mainbox}>
      <Center object={<h1 className={styles.mainheadtext}>Authenticating...</h1>}
      object2={<h1 className={styles.nametext}>Please give us a second...</h1>}
      object3={<h1 className={styles.nametext}>We promise you it is worth it...</h1>}
      object4={<h1 className={styles.mainheadtext}>~~~~~~~~~~~~~~~~~~~~</h1>}
      object5={<Spinner/>}
      />
      
    </div>
  );
};

export default Callback;
