import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Children } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Form, ScrollView, YStack } from 'tamagui';

import { ZExpensesSchema } from './constants';
import { IExpenses } from './types';
import BackButtonComponent from '../../shared/components/BackButton.component';
import ControllerComponent from '../../shared/components/Controller.component';
import SubmitButtonComponent from '../../shared/components/SubmitButton.component';
import { useStore } from '../../shared/hooks/useStore';
import { Container, Main, Subtitle, Title } from '../../tamagui.config';

export default function Expenses() {
  const { user, setUser } = useStore();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<IExpenses>({
    defaultValues: {
      fieldsArray: user?.categories ?? [],
    },
    resolver: zodResolver(ZExpensesSchema),
    mode: 'all',
  });

  const { fields } = useFieldArray<IExpenses>({
    control,
    name: 'fieldsArray',
  });

  const onSubmit = (value: IExpenses) => {
    setUser({ categories: value.fieldsArray });
    router.push('/proposal/page');
  };

  return (
    <Container edges={['top']}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        contentContainerStyle={{ flex: 1 }}
        style={{ flex: 1 }}>
        <Main>
          <BackButtonComponent />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <YStack flex={1}>
              <Title>Gastos Mensuales</Title>
              <Subtitle>Organicemos tus gastos mensuales de manera detallada</Subtitle>
              <Form space="$3" mt="$6" flex={1} onSubmit={handleSubmit(onSubmit)}>
                {Children.toArray(
                  fields.map((_, index) => (
                    <ControllerComponent
                      control={control}
                      name={`fieldsArray.${index}.value`}
                      placeholder="Total de gastos"
                      label={`Gastos en ${fields[index].name.toLowerCase()}`}
                      textContentType="name"
                      returnKeyType="next"
                      isError={!!errors.fieldsArray?.[index]?.value}
                      error={errors.fieldsArray?.[index]?.value?.message}
                    />
                  ))
                )}
                <YStack flex={1} justifyContent="flex-end">
                  <SubmitButtonComponent isLoading={isLoading} isSubmitting={isSubmitting}>
                    Siguiente
                  </SubmitButtonComponent>
                </YStack>
              </Form>
            </YStack>
          </ScrollView>
        </Main>
      </KeyboardAvoidingView>
    </Container>
  );
}
