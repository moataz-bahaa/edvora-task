import { createContext } from 'react';
import { RideType } from '../shared/types';

interface RidesContextProfiderProps {
  value: RideType[];
  children: React.ReactNode;
}

export const RidesContext = createContext([] as RideType[]);
const RidesContextProfider: React.FC<RidesContextProfiderProps> = ({
  children,
  value,
}) => {
  return (
    <RidesContext.Provider value={value}>{children}</RidesContext.Provider>
  );
};

export default RidesContextProfider;
