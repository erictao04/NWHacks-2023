import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

export default function Post() {
  const time = '1:10 PM';

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
      <PostHeader />
      <PostImage />
      <div style={{ display: 'flex', justifyContent: 'end', margin: '5px 10px', color: '#D0D8D8' }}>
        {time}
      </div>
    </div>
  );
}
