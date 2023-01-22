import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch();
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
