import { YStack, Text } from 'tamagui';

type ItemTypeComponentProps = {
  title: string;
  description: string;
  isActive?: boolean;
  isError?: boolean;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const ItemTypeComponent: React.FC<ItemTypeComponentProps> = ({
  title,
  description,
  isActive,
  isError,
  setSelectedItem,
}) => {
  return (
    <YStack
      flex={1}
      space="$3"
      m="$2"
      alignItems="center"
      justifyContent="center"
      borderColor={isError ? 'red' : isActive ? 'gray' : '#D0D5DD'}
      borderWidth={1}
      onPress={() => setSelectedItem(title)}
      py="$6"
      px="$1">
      <Text fontSize="$5">{title}</Text>
      <Text fontSize="$3" textAlign="center">
        {description}
      </Text>
    </YStack>
  );
};

export default ItemTypeComponent;
