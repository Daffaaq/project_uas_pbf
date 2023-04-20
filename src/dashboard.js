import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <h2>Welcome, {props.username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Dashboard;
