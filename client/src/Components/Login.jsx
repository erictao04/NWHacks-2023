import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://localhost:3001/profile/login/', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem('user_name', json.user_name);
        localStorage.setItem('user_id', json.user_id);
        localStorage.setItem('profile_url', json.profile_picture_url);
        navigate('/');
      });
  };

  return (
    <div>
      <TextField
        label='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      <TextField
        label='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />

      <Button onClick={handleLogin}>Log In</Button>
      <Link to='/signup'>Sign up</Link>
    </div>
  );
}
