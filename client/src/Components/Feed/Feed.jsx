import React from 'react';
import Post from './Post';

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/feed/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((p) => p.completed);
        setPosts(filtered);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh' }}>
      {posts.map((post) => (
        <Post key={post.id} task={post} />
      ))}
    </div>
  );
}
