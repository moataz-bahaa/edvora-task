import { useContext } from 'react';
import { RideType } from '../shared/types';
import { UserContext } from '../contexts/UserContextProvider';

interface RideCardProps {
  ride: RideType;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const user = useContext(UserContext);
  return (
    <div className="ride-card">
      <div className="ride-img">
        <img src={ride.map_url} alt={ride.city} />
      </div>
      <div className="ride-info">
        <div className="ride-prop">
          <span className="prop-name">Ride id: </span>
          {ride.id}
        </div>
        <div className="ride-prop">
          <span className="prop-name">Origin Station: </span>
          {ride.origin_station_code}
        </div>
        <div className="ride-prop">
          <span className="prop-name">station_path: </span>
          [{ride.station_path.join(', ')}]
        </div>
        <div className="ride-prop">
          <span className="prop-name">Date: </span>
          {ride.date}
        </div>
        <div className="ride-prop">
          <span className="prop-name">Distance: </span>
          {ride.station_path.reduce((acc, cur) => {
            if (cur - user.station_code >= 0)
              return Math.min(cur - user.station_code, acc);
            return acc;
          }, 1000)}
        </div>
      </div>
      <div className='ride-location'>
        <div>{ride.city}</div>
        <div>{ride.state}</div>
      </div>
    </div>
  );
};

export default RideCard;
