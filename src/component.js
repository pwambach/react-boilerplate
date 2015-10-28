import React, {PropTypes} from 'react';

var TestComponent = React.createClass({
  render: function() {
    return <div>Component {this.props.xyz}</div>;
  }
});

TestComponent.propTypes = {
  xyz: PropTypes.number.isRequired
};

export default TestComponent;
