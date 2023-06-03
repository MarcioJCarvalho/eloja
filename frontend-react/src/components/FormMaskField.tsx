import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import InputMask from 'react-input-mask';

type FormMaskFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  mask: string;
  label: string;
  rules?: any;
};

const FormMaskField = ({
  control,
  name,
  label,
  mask,
  rules = {
    required: 'Campo nao preenchido',
    validate: {
      FilledInput: (v: string) => !/[_]/.test(v) || 'Campo não preenchido',
    },
  },
}: FormMaskFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputMask mask={mask} value={value} onChange={onChange}>
          <TextField
            label={label}
            variant="outlined"
            type="text"
            fullWidth
            error={!!error}
            helperText={error?.message || ''}
          />
        </InputMask>
      )}
    />
  );
};

export default FormMaskField;
