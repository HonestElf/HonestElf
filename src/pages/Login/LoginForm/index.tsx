import React from 'react';
import { useForm } from 'react-hook-form';
import style from './LoginForm.module.scss';
import { loginFormConfig } from './formConfig';
import FormFieldRenderer from '../../../components/FormFieldRenderer';
import { mockFetchLogin } from '../../../API/LoginApi';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '../../../router/routes';
import { useAuth } from '../../../auth/AuthProvider';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (values: any) => {
    console.log('SUMIT: ', values);
    try {
      const result = await mockFetchLogin(values);

      if (result === 'success') {
        auth.login({ isLoggedIn: true });
      }
    } catch (error) {
      console.error('Error in form submitting');
    }
  };

  const headBackClickHandle = () => {
    navigate(AppPaths.home);
  };

  if (auth.isLoggedIn) {
    return (
      <div className={style.LoginFormWrapper}>
        <div className={style.FormTitile}>You are already logged in</div>
        <button className={style.FormButton} onClick={headBackClickHandle}>
          Head home
        </button>
      </div>
    );
  }
  return (
    <div className={style.LoginFormWrapper}>
      <div className={style.FormTitile}>Login to your account</div>
      <form className={style.LoginForm}>
        {loginFormConfig.map((field) => {
          const fieldData = { ...field, customRegisterParams: {} };
          if (field.key === 'Email') {
            fieldData.customRegisterParams = {
              pattern: {
                value: /.+@.+\..+/i,
                message: 'Email format: example@example.com',
              },
            };
          }
          return (
            <FormFieldRenderer
              key={field.id}
              fieldData={fieldData}
              register={register}
              error={errors[field.key as keyof typeof errors]}
            />
          );
        })}
        <div className={style.FormButton} onClick={handleSubmit(formSubmit)}>
          Log In
        </div>
      </form>
      <div className={style.ForgotButton} onClick={() => {}}>
        Forgot password?
      </div>
    </div>
  );
};

export default LoginForm;
