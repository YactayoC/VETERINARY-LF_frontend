import React from 'react';

export const Loading = () => {
  return (
    <div className="loading">
      <img className="loading-img" src="../assets/auth/loading.gif" alt="loading" />
      <p className="loading-text">Loading . . .</p>
    </div>
  );
};
