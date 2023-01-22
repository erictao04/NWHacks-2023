import React from 'react';

export default function Welcome() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const firstName = 'Eric'; // TODO Retrieve later

  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Hi {firstName}!</div>
      <div style={{ fontSize: '13px' }}>
        Today {month} {day}
      </div>
    </div>
  );
}
