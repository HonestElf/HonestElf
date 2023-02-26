import { FormFieldTypes } from '../../../components/FormFieldRenderer/FieldType';

export const loginFormConfig = [
  {
    id: 1,
    key: 'email',
    label: 'Email',
    fieldType: FormFieldTypes.Text,
    editable: true,
    required: true,
  },

  {
    id: 2,
    key: 'password',
    label: 'Password',
    fieldType: FormFieldTypes.Text,

    editable: true,
    required: true,
  },
  {
    id: 3,
    key: 'rememberMe',
    label: 'Remember me',
    fieldType: FormFieldTypes.Check,

    editable: true,
  },
];
