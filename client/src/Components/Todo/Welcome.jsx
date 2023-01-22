import React from 'react';

export default function Welcome() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const fullName = localStorage.getItem('user_name');
  const firstName = fullName.slice(0, fullName.indexOf(' '));

  const name = fullName === 'Undefined' ? 'Hi!' : `Hi ${firstName}!`;

  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{name}</div>
      <div style={{ fontSize: '13px' }}>
        Today {month} {day}
      </div>
    </div>
  );
}
