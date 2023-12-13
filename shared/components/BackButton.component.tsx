import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { Button, YStack } from 'tamagui';

const BackButtonComponent = () => {
  const router = useRouter();
  return (
    <YStack>
      <Button
        unstyled
        onPress={router.back}
        icon={<Feather name="chevron-left" size={23} color="#38434D" />}
      />
    </YStack>
  );
};

export default memo(BackButtonComponent);
