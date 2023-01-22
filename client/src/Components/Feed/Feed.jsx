import React from 'react';
import Post from './Post';
import { Link, useNavigate } from 'react-router-dom';

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetch('http://localhost:3001/feed/', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((p) => p.completed);
        setPosts(filtered);
      })
      .catch((err) => {
        navigate('/login');
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
