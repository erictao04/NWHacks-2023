import React, { useContext } from 'react';
import { Tab, Tabs, TabPanel } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

import Feed from './Feed/Feed';
import ProfilePicture from './Feed/ProfilePicture';
import Todo from './Todo/Todo';

export default function Main() {
  const [value, setValue] = React.useState(0);

  const profileUrl =
    'https://lh3.googleusercontent.com/ogw/AAEL6sggMroyh3_FGElpcVH9_m54NQmXHQuHLh1J_INs8g=s32-c-mo';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          alignItems: 'center',
        }}>
        <div style={{ flexGrow: 1, cursor: 'pointer' }}>
          <GroupIcon style={{ fontSize: '40px' }} />
        </div>
        <Tabs
          value={value}
          style={{ color: '#34344E' }}
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
          onChange={handleChange}>
          <Tab label='Feed' value={0} />
          <Tab label='To-do List' value={1} />
        </Tabs>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}>
          <ProfilePicture url={profileUrl} />
        </div>
      </div>
      {value === 0 && <Feed />}
      {value === 1 && <Todo />}
    </>
  );
}
