import React, {Component} from 'react';
import TestComponent from './component';

class App extends Component {

  constructor() {
    super(arguments);
    this.state = {
      xyz: 10
    };
  }

  render() {
    return <div>
      <h1 className="red">Hello {this.state.xyz}</h1>
      <TestComponent xyz={this.state.xyz} />
    </div>;
  }
}

export default App;
