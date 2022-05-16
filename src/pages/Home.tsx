import { useState, useContext } from 'react';
import { FilterType } from '../shared/types';
import Header from '../components/Header';
import RidesContainer from '../components/RidesContainer';
import Navbar from '../layout/Navbar';
import { RidesContext } from '../contexts/RidesContextProvider';
import { UserContext } from '../contexts/UserContextProvider';

interface HomeProps {}

const Home: React.FC<HomeProps> = (porps) => {
  const [filter, setFilter] = useState<FilterType>('nearst');

  const rides = useContext(RidesContext);
  const user = useContext(UserContext);

  const curDate = new Date();
  const nearstRides = rides.filter((ride) =>
    ride.station_path.includes(user.station_code)
  );
  const pastRides = rides.filter((ride) => new Date(ride.date) < curDate);
  const upComingRides = rides.filter((ride) => new Date(ride.date) > curDate);

  return (
    <>
      <Navbar user={user} />
      <Header
        setFilter={setFilter}
        filter={filter}
        upComingRidesNumber={upComingRides.length}
        pastRidesNumber={pastRides.length}
        nearstRidesNumber={nearstRides.length}
      />
      {filter === 'nearst' ? (
        <RidesContainer rides={nearstRides} noRides={'No nearst rides'} />
      ) : filter === 'past' ? (
        <RidesContainer rides={pastRides} noRides={'No past rides'} />
      ) : (
        <RidesContainer rides={upComingRides} noRides={'No upcoming rides'} />
      )}
    </>
  );
};

export default Home;
