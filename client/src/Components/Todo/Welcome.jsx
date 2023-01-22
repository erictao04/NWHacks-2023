import React from 'react';

export default function Welcome() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Hi Steven!</div>
      <div style={{ fontSize: '13px' }}>
        Today {month} {day}
      </div>
    </div>
  );
}
