import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, ListRenderItem } from 'react-native';
import { Text, YStack } from 'tamagui';

import CategoryComponent from './components/Category.component';
import { ZCategoriesSchema, initialValues } from './constants';
import { ICategories } from './types';
import BackButtonComponent from '../../shared/components/BackButton.component';
import { useStore } from '../../shared/hooks/useStore';
import { Button, ButtonText, Container, Subtitle, Title } from '../../tamagui.config';

const CATEGORIES = ['Hogar', 'Transporte', 'Alimentación', 'Moda', 'Salud y bienestar', 'Otros'];

const ListHeaderComponent = () => (
  <YStack flex={2}>
    <Title>Categoriza</Title>
    <Subtitle fontSize="$9">
      Organiza tus gastos en cateogrias para entender mejor tus finanzas
    </Subtitle>
  </YStack>
);

const Category: React.FC = () => {
  const [categoriesBySelected, setCategoriesBySelected] = useState<string[]>([]);
  const setUser = useStore((state) => state.setUser);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<ICategories>({
    defaultValues: initialValues,
    resolver: zodResolver(ZCategoriesSchema),
    mode: 'all',
  });

  useEffect(() => {
    setValue('categories', categoriesBySelected);
    clearErrors('categories');
  }, [categoriesBySelected]);

  const renderCategoryItem: ListRenderItem<string> = ({ item }) => {
    const isActive = categoriesBySelected.includes(item);
    return (
      <CategoryComponent
        setCategoriesBySelected={setCategoriesBySelected}
        name={item}
        isActive={isActive}
        isError={!!errors.categories}
      />
    );
  };

  const ListFooterComponet = () => (
    <YStack flex={1}>
      <Button mt="$3" onPress={handleSubmit(onSubmit)}>
        <ButtonText>Siguiente</ButtonText>
      </Button>
    </YStack>
  );

  const onSubmit = (value: ICategories) => {
    const categories = value.categories.map((item) => ({ name: item, value: '' }));
    setUser({ categories });
    router.push('/expenses/page');
  };

  return (
    <Container edges={['top']}>
      <BackButtonComponent />
      <FlatList<string>
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponet}
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        ListEmptyComponent={() => <Text>No hay categorias</Text>}
        keyExtractor={(item) => item}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Category;
