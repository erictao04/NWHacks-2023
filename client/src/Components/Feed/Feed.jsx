import React from 'react';
import Post from './Post';

export default function Feed() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh' }}>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
