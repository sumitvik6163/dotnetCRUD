import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {

    const location = useLocation();
    const myData = location.state;
  return (
    <div>
      <h1>Welcome <strong>{myData.uname}</strong></h1>
    </div>
  )
}
export default Dashboard