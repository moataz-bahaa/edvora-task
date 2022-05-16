import { useEffect, useState } from 'react';
import './App.css';
import RidesContextProfider from './contexts/RidesContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import Home from './pages/Home';
import { RideType, User } from './shared/types';

function App() {
  const [rides, setRides] = useState<RideType[]>([]);
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://assessment.api.vweb.app/rides');
        const data = await response.json();
        setRides(data);
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://assessment.api.vweb.app/user');
        const user = await response.json();
        setUser(user);
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <RidesContextProfider value={rides}>
      <UserContextProvider value={user}>
        <Home />
      </UserContextProvider>
    </RidesContextProfider>
  );
}

export default App;
