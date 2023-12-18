import { FontAwesome5 } from '@expo/vector-icons';
import { YStack, Text } from 'tamagui';

type CategoryComponentProps = {
  isActive?: boolean;
  setCategoriesBySelected: React.Dispatch<React.SetStateAction<string[]>>;
  name: string;
  isError: boolean;
};

const ICONS = {
  Hogar: {
    name: 'home',
    color: '#FFB6C1', // Light Pink
  },
  Transporte: {
    name: 'car',
    color: '#FFD700', // Gold
  },
  Alimentación: {
    name: 'hamburger',
    color: '#98FB98', // Pale Green
  },
  Moda: {
    name: 'tshirt',
    color: '#FFA07A', // Light Salmon
  },
  'Salud y bienestar': {
    name: 'heartbeat',
    color: '#C1E1C1', // Light Green
  },
  Otros: {
    name: 'question',
    color: '#B0E0E6', // Powder Blue
  },
};

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  name,
  setCategoriesBySelected,
  isActive,
  isError,
}) => (
  <YStack
    flex={1}
    space="$3"
    m="$2"
    alignItems="center"
    justifyContent="center"
    borderColor={isError ? 'red' : isActive ? 'gray' : '#D0D5DD'}
    borderWidth={1}
    py="$6"
    px="$1"
    onPress={() =>
      setCategoriesBySelected((pre) => {
        if (!pre.includes(name)) return [...pre, name];
        return pre.filter((item) => item !== name);
      })
    }>
    <FontAwesome5
      name={ICONS[name as keyof typeof ICONS].name}
      size={40}
      color={ICONS[name as keyof typeof ICONS].color}
    />
    <Text fontSize="$1" textAlign="center" fontWeight="600" color="#38434D">
      {name}
    </Text>
  </YStack>
);

export default CategoryComponent;
