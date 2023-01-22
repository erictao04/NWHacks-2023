import React, { useContext } from 'react';
import { Tab, Tabs } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

import { ThemeContext } from '../App';
import ProfilePicture from './ProfilePicture';

export default function FeedHeader() {
  const theme = useContext(ThemeContext);
  const [value, setValue] = React.useState(0);

  const profileUrl =
    'https://lh3.googleusercontent.com/ogw/AAEL6sggMroyh3_FGElpcVH9_m54NQmXHQuHLh1J_INs8g=s32-c-mo';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        alignItems: 'center',
      }}>
      <div style={{ flexGrow: 1 }}>
        <GroupIcon style={{ fontSize: '40px' }} />
      </div>
      <Tabs value={value} onChange={() => {}}>
        <Tab label='Feed' />
        <Tab label='To-do List' />
      </Tabs>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <ProfilePicture url={profileUrl} />
      </div>
    </div>
  );
}
