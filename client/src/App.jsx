import React from 'react';

import Feed from './Components/Feed';
import FeedHeader from './Components/FeedHeader';

const theme = {
  primary: '34344E',
  secondary: '3A415A',
  tertiary: '566981',
  quaternary: '89A7B1',
  quinary: 'CBDAD5',
};

export const ThemeContext = React.createContext(theme);

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <FeedHeader />
      <Feed />
    </ThemeContext.Provider>
  );
}
