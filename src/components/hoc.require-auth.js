import React, { Component } from 'react';
import { connect } from 'react-redux';

// Higher Order Component
// Use:
//  import requireAuth from 'hoc.require-auth'
//  import Consumer from 'comsumer'
//  const AuthenticatedConsumer = requireAuth(Consumer)
//  render <AuthenticatedConsumer/>
export default function (ComposedComponent) {
  class Authentication extends Component {

    // Enables router in this.context
    static contextTypes = {
     router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push("/");
      }
    }

    render() {
      if(this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }

      return <h5>User must be logged in.</h5>;
    }
  }

  function mapStateToProps({ authenticated }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
