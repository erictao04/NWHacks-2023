import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';

import ProfilePicture from './ProfilePicture';

export default function PostHeader() {
  const username = 'erictao04';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        borderRadius: '10px',
      }}>
      <div style={{ flexGrow: 1, marginLeft: '10px' }}>
        <ProfilePicture
          url={
            'https://lh3.googleusercontent.com/ogw/AAEL6sggMroyh3_FGElpcVH9_m54NQmXHQuHLh1J_INs8g=s32-c-mo'
          }
        />
      </div>
      {username}
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'end', marginRight: '5px' }}>
        <MoreVertIcon />
      </div>
    </div>
  );
}
