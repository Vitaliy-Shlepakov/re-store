import React, {Component} from 'react';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {

  }

  render() {
    const {hasError} = this.state;

    if (hasError){
      return <ErrorIndicator/>;
    }

    return this.props.children
  }
}

export default ErrorBoundry;
