import React, { useContext } from 'react';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Main from './Components/Main';

const theme = {
  primary: '34344E',
  secondary: '3A415A',
  tertiary: '566981',
  quaternary: '89A7B1',
  quinary: 'CBDAD5',
};

export const ThemeContext = React.createContext(theme);

export default function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
