import React from 'react';
import { TextField } from '@mui/material';
import { Control, FieldValues, useController } from 'react-hook-form';

type FormTextFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  rules?: any;
};

const FormTextField = ({ control, name, label, rules = { required: 'Campo nao preenchido' } }: FormTextFieldProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: rules,
  });

  return (
    <TextField
      fullWidth
      id={name}
      label={label}
      error={!!error}
      helperText={error?.message || ''}
      inputRef={ref}
      {...inputProps}
      value={inputProps.value ? inputProps.value : ''}
    />
  );
};

export default FormTextField;
