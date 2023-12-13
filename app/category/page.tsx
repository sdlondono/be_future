import { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Text, YStack } from 'tamagui';

import CategoryComponent from './components/Category.component';
import BackButtonComponent from '../../shared/components/BackButton.component';
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
  const renderCategoryItem: ListRenderItem<string> = ({ item }) => {
    const isActive = categoriesBySelected.includes(item);
    return (
      <CategoryComponent
        setCategoriesBySelected={setCategoriesBySelected}
        name={item}
        isActive={isActive}
      />
    );
  };
  const ListFooterComponet = () => (
    <YStack flex={1}>
      <Button mt="$3">
        <ButtonText>Siguiente</ButtonText>
      </Button>
    </YStack>
  );

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
