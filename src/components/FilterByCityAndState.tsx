interface FilterByCityAndStateProps {}

const FilterByCityAndState: React.FC<FilterByCityAndStateProps> = ({}) => {
  return (
    <div className="filter-by-city-state">
      <button className="filter">
        <div className="filter-icon"></div>
        Filter
      </button>
    </div>
  );
};

export default FilterByCityAndState;
