import cx from 'classnames';

import style from './FormFields.module.scss';

export const TextField = (props: any) => {
  const {
    fieldData: {
      key,
      required,
      label: labelText,
      editable,
      defaultValue,
      type,
      customRegisterParams,
    },
    error,
    register,
  } = props;

  const registerParameters = {
    required: { value: required, message: 'Обязательное поле' },
    ...customRegisterParams,
  };

  return (
    <div
      className={cx([style.FormFieldWrapper, !editable && style.DisabledField])}
      style={{ gridArea: `${key}` }}
    >
      {labelText && (
        <label htmlFor={key} className={style.FormFieldLabel}>
          {labelText}
          {required && <span className={style.RequiredSign}>*</span>}
        </label>
      )}
      <input
        id={key}
        {...register(key, registerParameters)}
        className={cx([style.FormField, !editable && style.DisabledField, 'p'])}
        disabled={!editable}
        defaultValue={defaultValue}
        type={type}
      />
      {error && <div className={style.ErrorMessage}>{error.message}</div>}
    </div>
  );
};

export const СheckField = (props: any) => {
  const {
    fieldData: { key, required, label: labelText, editable },
    error,
    register,
  } = props;

  return (
    <div className={style.FormFieldWrapper}>
      <div className={style.CheckFieldWrapper}>
        <input
          id={key}
          type='checkbox'
          {...register(key, {
            required: { value: required, message: 'Обязательное поле' },
          })}
          className={cx([style.FormField, style.CheckField])}
          disabled={!editable}
        />
        {labelText && (
          <label
            htmlFor={key}
            className={cx([style.FormFieldLabel, style.CheckFieldLabel])}
          >
            {labelText}{' '}
          </label>
        )}
      </div>
      {error && <div className={style.ErrorMessage}>{error.message}</div>}
    </div>
  );
};
