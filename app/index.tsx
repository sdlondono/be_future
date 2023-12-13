import { Link } from 'expo-router';
import { YStack } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container edges={['top']}>
      <Main>
        <YStack>
          <Title>Be Future</Title>
          <Subtitle>Tu futuro comienza hoy</Subtitle>
        </YStack>
        <Link href={{ pathname: '/details/page' }} asChild>
          <Button>
            <ButtonText>Siguiente</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
