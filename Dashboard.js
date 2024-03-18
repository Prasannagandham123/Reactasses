// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from './auth';
import { fetchData } from './api';

function Dashboard() {
  const { user, signOut } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user ? user.displayName : 'Guest'}</p>
      <button onClick={signOut}>Sign out</button>
      {data && (
        <div>
          {/* Render your fetched data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
