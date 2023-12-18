import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, ListRenderItem } from 'react-native';
import { YStack } from 'tamagui';

import ItemTypeComponent from './components/ItemType.component';
import { ZSaverSchema, initialSaverValues } from './constants';
import { ISaver } from './types';
import BackButtonComponent from '../../shared/components/BackButton.component';
import { useStore } from '../../shared/hooks/useStore';
import { Button, ButtonText, Container, Subtitle, Title } from '../../tamagui.config';

const DATA = [
  {
    id: '1',
    title: 'Tipo A',
    description: 'Entre el 0% y el 10% de tus ingresos',
  },
  {
    id: '2',
    title: 'Tipo B',
    description: 'Entre el 10% y el 20% de tus ingresos',
  },
  {
    id: '3',
    title: 'Tipo C',
    description: 'Entre el 20% y el 30% de tus ingresos',
  },
];

const ListHeaderComponent = () => (
  <YStack flex={1}>
    <Title>Tipo de ahorrador</Title>
    <Subtitle>Identifiquemos que tipo de ahorrador eres</Subtitle>
  </YStack>
);

const Saver = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string>('');
  const setUser = useStore((state) => state.setUser);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<ISaver>({
    defaultValues: initialSaverValues,
    resolver: zodResolver(ZSaverSchema),
    mode: 'all',
  });

  const renderSaverItem: ListRenderItem<{ title: string; description: string }> = ({ item }) => {
    const isActive = selectedItem.includes(item.title);
    return (
      <ItemTypeComponent
        {...item}
        isActive={isActive}
        isError={!!errors.saver}
        setSelectedItem={setSelectedItem}
      />
    );
  };

  useEffect(() => {
    setValue('saver', selectedItem);
    clearErrors('saver');
  }, [selectedItem]);

  const ListFooterComponent = () => (
    <YStack flex={1}>
      <Button mt="$3" onPress={handleSubmit(onSubmit)}>
        <ButtonText>Siguiente</ButtonText>
      </Button>
    </YStack>
  );

  const onSubmit = (value: ISaver) => {
    setUser({ saverType: value.saver });
    router.push('/category/page');
  };

  return (
    <Container edges={['top']}>
      <BackButtonComponent />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={ListHeaderComponent}
        data={DATA}
        renderItem={renderSaverItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
      />
    </Container>
  );
};

export default Saver;
