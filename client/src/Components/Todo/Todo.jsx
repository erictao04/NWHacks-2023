import React from 'react';
import CreateTask from './CreateTask';
import Tasks from './Tasks';
import Welcome from './Welcome';

export default function Todo() {
  return (
    <>
      <Welcome />
      <Tasks />
      <CreateTask />
    </>
  );
}
