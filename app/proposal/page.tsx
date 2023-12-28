import ConfettiCannon from 'react-native-confetti-cannon';
import { YStack } from 'tamagui';

import BackButtonComponent from '../../shared/components/BackButton.component';
import { useStore } from '../../shared/hooks/useStore';
import { Container, Subtitle, Title } from '../../tamagui.config';

const Proposal = () => {
  const user = useStore((state) => state.user);
  console.log(user);
  return (
    <Container edges={['top']}>
      <BackButtonComponent />
      <ConfettiCannon count={200} fadeOut origin={{ x: -10, y: 0 }} />
      <YStack flex={1}>
        <Title>Propuesta final</Title>
        <Subtitle>Esto es lo que te proponemos</Subtitle>
      </YStack>
    </Container>
  );
};

export default Proposal;
