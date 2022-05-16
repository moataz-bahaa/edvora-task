import { RideType } from '../shared/types';
import RideCard from './RideCard';

interface RidesContainerProps {
  rides: RideType[];
  noRides: string;
}

const RidesContainer: React.FC<RidesContainerProps> = ({ rides, noRides }) => {
  return (
    <div className="container">
      {rides.length ? (
        rides.map((ride) => {
          return <RideCard key={ride.id + ride.city} ride={ride} />;
        })
      ) : (
        <div className="no-rides">{noRides}</div>
      )}
    </div>
  );
};

export default RidesContainer;
