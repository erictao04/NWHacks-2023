import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfilePicture({ url }) {
  if (url) {
    return <img style={{ height: '35px', borderRadius: '50%', cursor: 'pointer' }} src={url} />;
  }

  return <AccountCircleIcon style={{ fontSize: '35px' }} />;
}
