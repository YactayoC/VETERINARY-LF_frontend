import { Link, useNavigate } from 'react-router-dom';

import { AuthLogin, PrivateRoutesEmployee, PublicRoutes } from '@/models';
import { isEmail, SwalError } from '@/utils';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks';

const LoginEmployee = () => {
  const navigate = useNavigate();
  const { handleLoginEmployee } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLogin>();

  const onSubmitForm = async (dataLogin: AuthLogin) => {
    const { errorMessage, hasError } = await handleLoginEmployee(dataLogin);
    if (hasError) {
      return SwalError(errorMessage);
    }

    navigate(`/${PrivateRoutesEmployee.PRIVATEEMPLOYEE}`, { replace: true });
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
        <h2 className="form__heading-admin">Login in Loyal Friend</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            autoComplete="off"
            {...register('email', { required: 'This field is required', validate: isEmail })}
          />
          {errors.email && <p className="error-input">{errors.email.message}</p>}
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
          />
          {errors.password && <p className="error-input">{errors.password.message}</p>}
        </div>
        <div className="form__submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginEmployee;
