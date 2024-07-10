// ErrorBoundary.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>We're sorry, but something went wrong on our end. Please try again later.</p>
          <Link to="/">Return to Home</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
