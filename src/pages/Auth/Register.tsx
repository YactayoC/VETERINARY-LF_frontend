import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { isEmail, isFullname, isPhone, SwalError, SwalSuccess } from '@/utils';
import { AuthRegister, PublicRoutes } from '@/models';

const Register = () => {
  document.title = 'LoyalFriend | Register';
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthRegister>();

  const onSubmitForm = async (dataRegister: AuthRegister) => {
    const { hasError, data, errorMessage } = await handleRegister(dataRegister);

    if (hasError) {
      return SwalError(errorMessage);
    }

    SwalSuccess('Register Success', data?.msg!);
    reset();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return (
    <div className="auth">
      <div className="auth__img animate__animated animate__fadeIn">
        <img src="../assets/auth/dog.png" alt="dog" />
        <Link className="back__home" to="/">
          <i className="fa-solid fa-chevron-left"></i>
          <p>Home</p>
        </Link>
      </div>

      <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Register in Loyal Friend</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Fullname"
            autoComplete="off"
            {...register('fullname', {
              required: 'This field is required',
              minLength: { value: 6, message: 'The fullname must be at least 6 characters long' },
              validate: isFullname,
            })}
          />
          {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Phone"
            autoComplete="off"
            {...register('phone', {
              required: 'This field is required',
              validate: isPhone,
            })}
          />
          {errors.phone && <p className="error-input">{errors.phone.message}</p>}
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Address"
            autoComplete="off"
            {...register('address', {
              required: 'This field is required',
              minLength: { value: 6, message: 'The address must be at least 6 characters long' },
            })}
          />
          {errors.address && <p className="error-input">{errors.address.message}</p>}
        </div>
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
              minLength: { value: 6, message: 'The password must be at least 6 characters long' },
            })}
          />
          {errors.password && <p className="error-input">{errors.password.message}</p>}
        </div>
        {/* <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
            {...register('password2', {
              required: 'This field is required',
              minLength: { value: 6, message: 'The password must be at least 6 characters long' },
            })}
          />
        </div> */}
        <div className="form__submit">
          <button>Register</button>
          <p>
            Already have an account? <Link to="/auth/login">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
