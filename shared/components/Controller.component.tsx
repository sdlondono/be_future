import { memo } from 'react';
import { Controller as RHFController, Control } from 'react-hook-form';
import { Input, Fieldset, Label, InputProps, Text } from 'tamagui';

type ControllerComponentProps = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  label: string;
  isError?: boolean;
  error?: string;
} & InputProps;

const ControllerComponent: React.FC<ControllerComponentProps> = ({
  control,
  name,
  placeholder,
  label,
  isError,
  error,
  ...rest
}) => (
  <RHFController
    control={control}
    name={name}
    render={({ field: { onChange, onBlur, value } }) => (
      <Fieldset>
        <Label color="black" htmlFor={name}>
          {label}
        </Label>
        <Input
          id={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          backgroundColor="white"
          color="black"
          {...rest}
        />
        {isError && <Text color="red">{error}</Text>}
      </Fieldset>
    )}
  />
);

export default memo(ControllerComponent);
