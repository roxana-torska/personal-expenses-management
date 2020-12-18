import React from 'react';
import { connect } from 'react-redux';

const Total = ({ total, isLoading }) => {
  if (isLoading) return <span>Loading...</span>;
  if (!total) return null;

  return (
    <div className="total">
      <span>Total: {total}</span>
    </div>
  );
};

const mapStateToProps = ({ total, isLoading }) => {
  return {
    total,
    isLoading,
  };
};

export default connect(mapStateToProps)(Total);
