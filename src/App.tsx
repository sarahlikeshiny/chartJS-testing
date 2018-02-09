import * as React from 'react';
import './App.css';
import { BarChartComponent } from './components/barChart/BarChart';
import { GraphComponent } from './components/randomisedLine/graph.compoent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <h1>I ❤ Charts</h1>
        </header>
      <BarChartComponent />
      <GraphComponent />
      </div>
    );
  }
}

export default App;
