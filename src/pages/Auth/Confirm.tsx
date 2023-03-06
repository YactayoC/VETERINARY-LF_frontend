import { useAuth } from '@/hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export const Confirm = () => {
  document.title = 'LoyalFriend | Confirm Account';
  const { handleConfirmAuth } = useAuth();
  const [messageConfirmAuth, setMessageConfirmAuth] = useState('');
  const [isConfirmAuth, setIsConfirmAuth] = useState(false);

  const param = useParams();
  const token = param.token;

  useEffect(() => {
    if (token) {
      handleConfirmAuth(token)
        .then((res) => {
          setMessageConfirmAuth(res.msg);
          setIsConfirmAuth(res.hasError);
        })
        .catch((err) => {
          setMessageConfirmAuth(err.msg);
          setIsConfirmAuth(err.hasError);
        });
    }
  }, []);

  return (
    <div className="confirm">
      <p className="confirm__text">{messageConfirmAuth}</p>
      {!isConfirmAuth && <img src="../assets/auth/confirm.gif" alt="confirm" />}
      <Link to="/auth/login" className="confirm__link">
        Login
      </Link>
    </div>
  );
};

export default Confirm;
