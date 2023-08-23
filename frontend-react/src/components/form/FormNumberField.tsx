import React from 'react';
import { TextField } from '@mui/material';
import { Control, FieldValues, useController } from 'react-hook-form';

type FormNumberFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  rules?: any;
};

const FormNumberField = ({
  control,
  name,
  label,
  rules = { required: 'Campo nao preenchido' },
}: FormNumberFieldProps) => {
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
      type="number"
      id={name}
      label={label}
      error={!!error}
      helperText={error?.message || ''}
      inputRef={ref}
      {...inputProps}
      value={inputProps.value ? inputProps.value : ''}
      onKeyDown={(e) => {
        if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
          e.preventDefault();
        }
      }}
    />
  );
};

export default FormNumberField;
