import React, { useEffect, useState } from 'react';
import Task from './Task';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const user_id = 2; // TODO Get from context

  useEffect(() => {
    fetch(`http://localhost:3001/tasks/${user_id}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => {
          if (a.completed) return 1;
          else if (b.completed) return -1;
          else return 0;
        });
        setTasks(data);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
