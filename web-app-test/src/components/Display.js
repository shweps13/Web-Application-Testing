import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Statistic } from 'semantic-ui-react'

function Display(props) {
// console.log(props)
  return (
    <div className="DisplayApp">
        <Statistic>
            <Statistic.Value>{props.balls}</Statistic.Value>
            <Statistic.Label>Balls</Statistic.Label>
        </Statistic>
        <Statistic>
            <Statistic.Value>{props.strikes}</Statistic.Value>
            <Statistic.Label>Strikes</Statistic.Label>
        </Statistic>
    </div>
  );
}

export default Display;
