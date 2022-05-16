import FilterByCityAndState from './FilterByCityAndState';
import { FilterType } from '../shared/types';

interface HeaderProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  filter: FilterType;
  upComingRidesNumber: number;
  pastRidesNumber: number;
  nearstRidesNumber: number;
}

const Header: React.FC<HeaderProps> = ({
  setFilter,
  filter,
  upComingRidesNumber,
  nearstRidesNumber,
  pastRidesNumber,
}) => {
  return (
    <div className="header container">
      <div className="header-content">
        <div className="ride-types">
          <div
            className={`filter-type ${filter === 'nearst' && 'active'}`}
            onClick={() => setFilter('nearst')}
          >
            Nearst rides ({nearstRidesNumber})
          </div>
          <div
            className={`filter-type ${filter === 'upcoming' && 'active'}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming rides ({upComingRidesNumber})
          </div>
          <div
            className={`filter-type ${filter === 'past' && 'active'}`}
            onClick={() => setFilter('past')}
          >
            Past rides ({pastRidesNumber})
          </div>
        </div>
        <FilterByCityAndState />
      </div>
    </div>
  );
};

export default Header;
