import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

function Dashboard(props) {
    console.log(props)

    // Functions for strikes
    const strike = strikes => {
        if (strikes < 3) {
            props.setStrikes(strikes => strikes + 1);
        } else {
            props.setStrikes((strikes = 0));
        }
      };
    
    // Function for balls
    const ball = ball => {
        if (ball < 4) {
            props.setBalls(ball => ball + 1);
        } else {
            props.setBalls((ball = 0));
        }
    };

    // Function for fouls
    const foul = foul => {
        if (foul === 0) {
            props.setStrikes(foul => foul + 1);
        } else if (foul === 1) {
            props.setStrikes(foul => foul + 1);
        } else {
            props.setStrikes(foul => foul + 0);
        }
    };

    // Function for hit
    const hit = () => {
        props.setStrikes(0);
        props.setBalls(0);
    };

  return (
    <div className="Dashboard">
        <Button onClick={() => strike(props.strikes)}>Strike</Button>
        <Button onClick={() => ball(props.balls)}>Ball</Button>
        <Button onClick={() => foul(props.strikes)}>Foul</Button>
        <Button onClick={() => hit()}>Hit</Button>
    </div>
  );
}

export default Dashboard;
