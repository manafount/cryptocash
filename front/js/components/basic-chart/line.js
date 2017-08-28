/**
 * @fileOverview Line Chart component.
 */
import React from 'react';

import ChartHeader from './chart-header';
import Prices from './prices';

export default class Line extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <ChartHeader />
        <Prices />
      </div>
    );
  }
}