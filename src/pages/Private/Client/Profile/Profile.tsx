import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Aside, Loader } from '@/components';
import { AuthProfile } from '@/models';
import { AppStore } from '@/redux/store';
import { isEmail, isFullname, isPhone } from '@/utils';

const ProfileClientPage = () => {
  const { client: dataUser } = useSelector((state: AppStore) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProfile>({
    defaultValues: {
      fullname: dataUser.fullname,
      phone: dataUser.phone,
      address: dataUser.address,
      email: dataUser.email,
      password: dataUser.password,
    },
  });

  const onUpdateDataUser = (data: AuthProfile) => {
    console.log(data);
  };

  if (!dataUser) {
    return <Loader />;
  }

  // TODO: actualizar datos

  return (
    <div className="appointment">
      <Aside />
      <div className="profile-data animate__animated animate__fadeIn">
        <div className="profile-data__general">
          <div>
            <i className="fa-solid fa-gear"></i>
            <h3>Settings</h3>
          </div>
          <button onClick={handleSubmit(onUpdateDataUser)}>
            <i className="fa-solid fa-pen-clip"></i>
            <p>Update Data</p>
          </button>
        </div>

        <div className="profile-data__table">
          <div className="profile-data__img">
            <img src="../assets/ui/user.webp" alt="profile" />
            <h3>{dataUser.fullname}</h3>
          </div>
          <div className="profile-data__form">
            <form className="form-profile animate__animated animate__fadeIn">
              <div className="form__group form__profile">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClientPage;
