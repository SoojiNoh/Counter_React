import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {

};

const defaultProps = {

};

class MyComponent extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
