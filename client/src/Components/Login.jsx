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
          onClick={handleLogin}>
          Log In
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
        <Link to='/signup'>Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}
