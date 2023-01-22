import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

export default function Post({ task }) {
  const time = React.useMemo(() =>
    new Date(task.time_completed).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
      <PostHeader task={task} />
      <PostImage />
      <div style={{ display: 'flex', justifyContent: 'end', margin: '5px 10px', color: '#D0D8D8' }}>
        {time}
      </div>
    </div>
  );
}
