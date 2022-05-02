import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { startConfirm } from '../../actions/auth';

export const ConfirmScreen = () => {
  const dispatch = useDispatch();

  const param = useParams();
  const token = param.token;

  useEffect(() => {
    dispatch(startConfirm(token));
  }, [dispatch, token]);

  return (
    <div className="confirm">
      <p className="confirm__text">User confirmed succelly</p>
      <img src="../assets/auth/confirm.gif" alt="confirm" />
      <Link to="/auth/login" className="confirm__link">
        Login
      </Link>
    </div>
  );
};
