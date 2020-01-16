import React, {Component} from 'react';
import Spinner from "../Spinner/Spinner";

class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {

  }

  render() {
    const {hasError} = this.state;

    if (hasError){
      return <Spinner/>;
    }

    return this.props.children
  }
}

export default ErrorBoundry;
