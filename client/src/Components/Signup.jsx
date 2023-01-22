import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    fetch('http://localhost:3001/profile/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        email: email,
      }),
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <img style={{ height: '70px', marginTop: '20vh' }} src='white logo.svg' />
      <div style={{ margin: '30px', display: 'flex' }}>
        <div style={{ color: '#7993A1', marginRight: '5px' }}>to check by</div>{' '}
        <div style={{ color: 'white' }}>checking</div>
      </div>

      <TextField
        style={{ marginBottom: '20px' }}
        label='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='name'
      />
      <TextField
        style={{ marginBottom: '20px' }}
        label='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <TextField
        style={{ marginBottom: '20px' }}
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

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          style={{ marginTop: '10px', backgroundColor: '#89A7B1' }}
          variant='contained'
          onClick={handleSignup}>
          Sign up
        </Button>
      </div>

      <div
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: '20px',
          justifyContent: 'center',
          width: '100vw',
        }}>
        <Link to='/signup'>Already have an account? Log in</Link>
      </div>
    </div>
  );
}
