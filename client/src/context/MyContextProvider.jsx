import { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
 
  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
