import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import ProfilePicture from './ProfilePicture';

export default function PostHeader({ task }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        borderRadius: '10px',
      }}>
      <div style={{ marginLeft: '10px', marginRight: '5px' }}>
        <ProfilePicture url={task.profile_picture_url} />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: '550', fontSize: '18px' }}>{task.username}</div>
        <div style={{ color: '#B5BEC8', display: 'flex', alignItems: 'center', fontSize: '12px' }}>
          <DownloadDoneIcon style={{ fontSize: '15px' }} />
          Task Completed: "{task.name}"
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'end', marginRight: '5px' }}>
        <MoreVertIcon />
      </div>
    </div>
  );
}
