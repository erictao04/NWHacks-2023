import React from 'react';

export default function ProfilePicture({ url }) {
  return <img style={{ height: '40px', borderRadius: '50%' }} src={url} />;
}
