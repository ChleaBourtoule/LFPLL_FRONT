import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type UserContent = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  wahine: boolean;
  setWahine: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

type Props = { children: Element };

const CurrentUserContext = createContext<UserContent>({
  id: 0,
  setId: () => {},
  firstname: '',
  setFirstname: () => {},
  logout: () => {},
  wahine: false,
  setWahine: () => {},
});

export const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {
  const [id, setId] = useState<number>(0);
  const [firstname, setFirstname] = useState<string>('');
  const [wahine, setWahine] = useState<boolean>(false);
  const removeCookie = useCookies(['user_token'])[2];

  const logout = (): void => {
    setId(0);
    setFirstname('');
    setWahine(false);
    removeCookie('user_token');
  };

  return (
    <CurrentUserContext.Provider
      value={{
        id,
        setId,
        firstname,
        setFirstname,
        logout,
        wahine,
        setWahine,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;