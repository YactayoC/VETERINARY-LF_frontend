import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/hooks';
import { AuthLogin, PublicRoutes } from '@/models';
import { isEmail, SwalError } from '@/utils';

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLogin>();

  const onSubmitForm = async (dataLogin: AuthLogin) => {
    const { errorMessage, hasError } = await handleLogin(dataLogin);
    if (hasError) {
      return SwalError(errorMessage);
    }

    navigate(`${PublicRoutes.HOME}`, { replace: true });
  };

  return (
    <div className="auth ">
      <div className="auth__img animate__animated animate__fadeIn">
        <img src="../assets/auth/cat.png" alt="cat" />
        <Link className="back__home" to="/">
          <i className="fa-solid fa-chevron-left"></i>
          <p>Home</p>
        </Link>
      </div>

      <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Login in Loyal Friend</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            autoComplete="off"
            {...register('email', { required: 'This field is required', validate: isEmail })}
            defaultValue="sebastianaronyactayo@gmail.com"
          />
          {errors.email && <p className="error-input">{errors.email.message}</p>}
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
            defaultValue="sebas2001"
          />
          {errors.password && <p className="error-input">{errors.password.message}</p>}
        </div>
        <div className="form__submit">
          <button>Login</button>
          <p>
            Don't have an account? <Link to="/auth/register">Sign Up</Link>
            <br />
            <br />
            Are you an employee? <Link to="/auth/login-employee">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
