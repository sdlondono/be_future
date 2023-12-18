import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Form, YStack } from 'tamagui';

import { ZDetailsSchema, initialDetailsValue } from './constants';
import { IDetails } from './types';
import BackButtonComponent from '../../shared/components/BackButton.component';
import ControllerComponent from '../../shared/components/Controller.component';
import SubmitButtonComponent from '../../shared/components/SubmitButton.component';
import { useStore } from '../../shared/hooks/useStore';
import { Container, Main, Subtitle, Title } from '../../tamagui.config';

export default function Details() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<IDetails>({
    defaultValues: initialDetailsValue,
    resolver: zodResolver(ZDetailsSchema),
    mode: 'all',
  });

  const setUser = useStore((state) => state.setUser);

  const onSubmit = (value: IDetails) => {
    setUser(value);
    router.push('/saver/page');
  };

  return (
    <Container edges={['top']}>
      <Main>
        <BackButtonComponent />
        <YStack flex={1}>
          <Title>Detalles</Title>
          <Subtitle>Iniciemos con algo simple, cuentanos sobre ti</Subtitle>
          <Form space="$3" mt="$6" flex={1} onSubmit={handleSubmit(onSubmit)}>
            <ControllerComponent
              control={control}
              name="fullName"
              placeholder="Nombre completo"
              label="Cual es tu nombre?"
              isError={!!errors.fullName}
              error={errors.fullName?.message}
              textContentType="name"
              returnKeyType="next"
            />
            <ControllerComponent
              control={control}
              name="age"
              placeholder="Ingresa tu edad"
              label="Que edad tienes?"
              isError={!!errors.age}
              error={errors.age?.message}
              textContentType="none"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <ControllerComponent
              control={control}
              name="monthlyIncome"
              placeholder="Ingresa tus ingresos mensuales"
              label="Cuantos son tus ingresos?"
              isError={!!errors.monthlyIncome}
              error={errors.monthlyIncome?.message}
              textContentType="none"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <ControllerComponent
              control={control}
              name="monthlyExpenses"
              placeholder="Ingresa tus gastos mensuales"
              label="Cuantos son tus gastos?"
              isError={!!errors.monthlyExpenses}
              error={errors.monthlyExpenses?.message}
              textContentType="none"
              keyboardType="numeric"
              returnKeyType="next"
            />
            <YStack flex={1} justifyContent="flex-end">
              <SubmitButtonComponent isLoading={isLoading} isSubmitting={isSubmitting}>
                Siguiente
              </SubmitButtonComponent>
            </YStack>
          </Form>
        </YStack>
      </Main>
    </Container>
  );
}
