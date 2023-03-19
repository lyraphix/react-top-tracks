import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return <Component {...pageProps} user={user} setUser={setUser} />;
}

export default MyApp;
