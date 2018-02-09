import * as React from 'react';
import './App.css';
import { BarChartComponent } from './components/barChart/BarChart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <h1>I ❤ Charts</h1>
        </header>
      <BarChartComponent />
      </div>
    );
  }
}

export default App;
