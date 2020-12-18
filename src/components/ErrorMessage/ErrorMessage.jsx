import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="error">
      <span>You've got an error: {error}</span>
    </div>
  );
};

const mapStateToProps = ({ error }) => {
  return { error };
};

export default connect(mapStateToProps)(ErrorMessage);
