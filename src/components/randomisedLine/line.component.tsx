import * as React from 'react';
import { GraphComponent } from './graph.compoent';

export class LineComponent extends React.Component {
    displayName: 'RandomizedDataLineExample';
  
    render() {
      return (
        <div>
          <h2>Random Animated Line Example</h2>
           <GraphComponent />
        </div>
      );
    }
  }