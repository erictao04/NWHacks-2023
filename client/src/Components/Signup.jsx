import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    fetch();
  };

  return (
    <div>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />

      <Button onClick={handleSignup}>Sign Up</Button>
      <Link to='/login'>Log in</Link>
    </div>
  );
}
