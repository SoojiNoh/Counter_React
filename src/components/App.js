import React, { Component, PropTypes } from 'react';
import Counter from './Counter';

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
        <Counter />
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
