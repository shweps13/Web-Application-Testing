import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

function Dashboard() {

  return (
    <div className="Dashboard">
        <Button>Strike</Button>
        <Button>Ball</Button>
        <Button>Foul</Button>
        <Button>Hit</Button>
    </div>
  );
}

export default Dashboard;
