import React, {createContext, useState} from 'react'; // 1 => Importing.
const UserContext = createContext(); // 2 => creating context with the given name for storing.

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(false); // Current State is null => no user

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
