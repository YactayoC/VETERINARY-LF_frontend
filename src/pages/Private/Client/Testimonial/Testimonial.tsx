import { Aside, Data, Item } from '@/components';
import { useModal, useTestimonial } from '@/hooks';
import { AppStore } from '@/redux/store';
import { SwalError, SwalSuccess } from '@/utils';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface AddTestimonial {
  testimonial: string;
}

const TestimonialClientPage = () => {
  document.title = 'LoyalFriend | Testimonial';
  const { myTestimonial } = useSelector((state: AppStore) => state.testimonials);
  const { isOpenModalAddTestimonial, isOpenModalUpdateTestimonial } = useSelector((state: AppStore) => state.modal);
  const { handleGetMyTestimonial, handleAddTestimonial, handleUpddateTestimonial } = useTestimonial();
  const { handleOpenModalAddTestimonial, handleOpenModalUpdateTestimonial } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddTestimonial>();

  useEffect(() => {
    handleGetMyTestimonial();
  }, []);

  const onAddTestimonial = async (dataTestimonialAdd: any) => {
    const { hasError, msg } = await handleAddTestimonial(dataTestimonialAdd);

    if (hasError) {
      return SwalError(msg);
    }

    SwalSuccess('Testimonial was added ', msg);
    handleOpenModalAddTestimonial(false);
    reset();
  };

  const onUpdateTestimonial = async (dataTestimonialUpdate: AddTestimonial) => {
    const { hasError, msg } = await handleUpddateTestimonial(myTestimonial[0]._id, dataTestimonialUpdate.testimonial);

    if (hasError) {
      return SwalError(msg);
    }

    SwalSuccess('Testimonial was updated ', msg);
    handleOpenModalUpdateTestimonial(false);
    reset();
  };

  return (
    <div className="appointment">
      <Aside />

      <div className="data animate__animated animate__fadeIn">
        <Data title="Testimonial" button="Add Testimonial" />

        <div className="appoitment-data__table">
          <div className="appointment-data__datas">
            <ul className="testimonial-data__datas-header">
              <li className="appointment-data__datas-element">Info</li>
              <li className="appointment-data__datas-element">Date</li>
              <li className="appointment-data__datas-element">Edit</li>
              <li className="appointment-data__datas-element">Remove</li>
            </ul>

            {myTestimonial && myTestimonial.length > 0 ? (
              <>
                {myTestimonial.map((testimonial) => (
                  <Item key={testimonial._id} testimonial={testimonial} type="testimonial" />
                ))}
              </>
            ) : (
              <p className="no-results">No testimonials found</p>
            )}
          </div>
        </div>
      </div>

      {isOpenModalAddTestimonial && (
        <div className={`modal ${!isOpenModalAddTestimonial && 'modal__hide'}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Testimonial</h2>
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={() => {
                  handleOpenModalAddTestimonial(false);
                }}
              ></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onAddTestimonial)}>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Provide a testimonial about our service"
                  autoComplete="off"
                  {...register('testimonial', {
                    required: 'This field is required',
                    minLength: { value: 10, message: 'The testimonial must be at least 10 characters long' },
                  })}
                ></textarea>
                {errors.testimonial && <p className="error-input">{errors.testimonial.message}</p>}
              </div>

              <div className="form__submit form__submit-add">
                <button className="form__button">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isOpenModalUpdateTestimonial && (
        <div className={`modal ${!isOpenModalUpdateTestimonial && 'modal__hide'}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Testimonial</h2>
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={() => {
                  handleOpenModalUpdateTestimonial(false);
                }}
              ></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onUpdateTestimonial)}>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Provide a testimonial about our service"
                  autoComplete="off"
                  defaultValue={myTestimonial[0].testimonial}
                  {...register('testimonial', {
                    required: 'This field is required',
                    minLength: { value: 10, message: 'The testimonial must be at least 10 characters long' },
                  })}
                ></textarea>
                {errors.testimonial && <p className="error-input">{errors.testimonial.message}</p>}
              </div>
              <div className="form__submit form__submit-add">
                <button type="submit" className="form__button">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialClientPage;
