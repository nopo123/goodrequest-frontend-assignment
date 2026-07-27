'use client';

import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';

import {
  CheckboxBox,
  CheckboxBoxChecked,
  CheckboxBoxError,
} from './CheckboxField.styled';

const CHECK_ICON_SIZE = 14;

type CheckboxFieldProps = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly isChecked: boolean;
  readonly error?: string;
  readonly onChange: (isChecked: boolean) => void;
  readonly onBlur?: () => void;
};

export const CheckboxField = ({
  id,
  name,
  label,
  isChecked,
  error,
  onChange,
  onBlur,
}: CheckboxFieldProps) => {
  const hasError = error !== undefined;
  const messageId = `${id}-message`;

  return (
    <Stack spacing={1}>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            id={id}
            name={name}
            checked={isChecked}
            icon={hasError ? <CheckboxBoxError /> : <CheckboxBox />}
            checkedIcon={
              <CheckboxBoxChecked>
                <CheckIcon sx={{ fontSize: CHECK_ICON_SIZE }} />
              </CheckboxBoxChecked>
            }
            onChange={(event) => onChange(event.target.checked)}
            onBlur={onBlur}
            slotProps={{
              input: {
                'aria-invalid': hasError,
                'aria-describedby': hasError ? messageId : undefined,
              },
            }}
          />
        }
      />

      {hasError && (
        <FormHelperText error id={messageId}>
          {error}
        </FormHelperText>
      )}
    </Stack>
  );
};
