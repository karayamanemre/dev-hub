import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated, isLoading, ...rest }) => {
  if (isLoading) {
    return null; // or some loading component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
