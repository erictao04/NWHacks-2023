import React, { useContext } from 'react';

import { ThemeContext } from '../App';

export default function FeedHeader() {
  const theme = useContext(ThemeContext);

  return <div>Feed Header</div>;
}
