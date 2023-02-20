import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Aside } from '@/components';
import { AppStore } from '@/redux/store';
import { useProfile } from '@/hooks';
import { AuthProfile } from '@/models';
import { isEmail, isFullname, isPhone, SwalError, SwalSuccess } from '@/utils';

const ProfileWorkerPage = () => {
  const { user } = useSelector((state: AppStore) => state.auth);
  const { handleAuthUpdate } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProfile>({
    defaultValues: {
      fullname: user.fullname,
      phone: user.phone,
      address: user.address,
      email: user.email,
      password: user.password,
    },
  });

  const onUpdateDataEmployee = async (data: AuthProfile) => {
    const { hasError, msg, errorMessage } = await handleAuthUpdate(data);

    if (hasError) {
      return SwalError(errorMessage);
    }

    SwalSuccess('Employee was updated', msg!);
  };

  return (
    <div className="appointment">
      <Aside />
      <div className="profile-data animate__animated animate__fadeIn">
        <div className="profile-data__general">
          <div>
            <i className="fa-solid fa-gear"></i>
            <h3>Settings</h3>
          </div>
          <button onClick={handleSubmit(onUpdateDataEmployee)}>
            <i className="fa-solid fa-pen-clip"></i>
            <p>Update Data</p>
          </button>
        </div>

        <div className="profile-data__table">
          <div className="profile-data__img">
            <img src="../assets/ui/user.webp" alt="profile" />
            <h3>{user.fullname}</h3>
          </div>
          <div className="profile-data__form">
            <form className="form-profile animate__animated animate__fadeIn">
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Fullame"
                  autoComplete="off"
                  {...register('fullname', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The fullname must be at least 6 characters long' },
                    validate: isFullname,
                  })}
                />
                {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
              </div>
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="tel"
                  placeholder="Phone"
                  autoComplete="off"
                  {...register('phone', {
                    required: 'This field is required',
                    validate: isPhone,
                  })}
                />
                {errors.phone && <p className="error-input">{errors.phone.message}</p>}
              </div>
              <div className="form__group form__profile">
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
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                  disabled
                  {...register('email', { required: 'This field is required', validate: isEmail })}
                />
                {errors.email && <p className="error-input">{errors.email.message}</p>}
              </div>
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  disabled
                  {...register('password', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The password must be at least 6 characters long' },
                  })}
                />
                {errors.password && <p className="error-input">{errors.password.message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWorkerPage;
