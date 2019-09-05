import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Statistic } from 'semantic-ui-react'

function Display() {

  return (
    <div className="DisplayApp">
        <Statistic>
            <Statistic.Value>2</Statistic.Value>
            <Statistic.Label>Balls</Statistic.Label>
        </Statistic>
        <Statistic>
            <Statistic.Value>1</Statistic.Value>
            <Statistic.Label>Strikes</Statistic.Label>
        </Statistic>
    </div>
  );
}

export default Display;
