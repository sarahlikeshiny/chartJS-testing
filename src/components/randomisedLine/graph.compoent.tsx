import * as React from 'react';
import { Line } from 'react-chartjs-2';

export class GraphComponent extends React.Component {
  initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  displayName: 'Graph';
  
  componentWillMount() {
    this.setState(this.initialState);
  }

  componentDidMount() {

  var _this = this;

  setInterval(function() {
  var oldDataSet = _this.initialState.datasets[0];
  var newData = [];

  for (var x = 0; x < _this.initialState.labels.length; x++) {
    newData.push(Math.floor(Math.random() * 100));
  }
  var newDataSet = {  
    ...oldDataSet
  };
  newDataSet.data = newData;

  var newState = {
      ..._this.initialState,
    datasets: [newDataSet]  
  };

  _this.setState(newState);
    }, 
              5000);
  }

  render() {
    return (
    <Line data={this.state} />
  );
  }
}
