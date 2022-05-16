import { createContext } from 'react';
import { User } from '../shared/types';

interface UserContextProviderProps {
  value: User;
  children: React.ReactNode;
}

export const UserContext = createContext<User>({} as User);

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  value,
  children,
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
