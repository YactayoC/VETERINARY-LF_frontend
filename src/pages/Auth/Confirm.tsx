import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export const Confirm = () => {
  const dispatch = useDispatch();

  const param = useParams();
  const token = param.token;

  useEffect(() => {}, []);

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

export default Confirm;
