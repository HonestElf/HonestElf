import React from 'react';

import { TextField, СheckField } from './FormFields';
import { FormFieldTypes } from './FieldType';

const FormFieldRenderer = (props: any) => {
  const {
    fieldData: { fieldType },
  } = props;

  switch (fieldType) {
    case FormFieldTypes.Check:
      return <СheckField {...props} />;
    case FormFieldTypes.Text:
    default:
      return <TextField {...props} />;
  }
};

export default FormFieldRenderer;
