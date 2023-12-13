import { memo } from 'react';
import { ButtonProps, Form, Spinner } from 'tamagui';

import { Button, ButtonText } from '../../tamagui.config';

type SubmitButtonProps = {
  isLoading: boolean;
  isSubmitting: boolean;
  children: string;
} & ButtonProps;

const SubmitButtonComponent: React.FC<SubmitButtonProps> = ({
  isLoading,
  isSubmitting,
  children,
  ...rest
}) => (
  <Form.Trigger asChild disabled={isLoading || isSubmitting}>
    <Button {...rest} icon={isSubmitting ? <Spinner /> : undefined}>
      <ButtonText>{children}</ButtonText>
    </Button>
  </Form.Trigger>
);

export default memo(SubmitButtonComponent);
