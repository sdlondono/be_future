import { memo } from 'react';
import { RadioGroup } from 'tamagui';

const RadioGroupItemComponent = () => {
  return (
    <RadioGroup.Item value="1">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  );
};

export default memo(RadioGroupItemComponent);
