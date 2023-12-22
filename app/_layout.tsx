import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" options={{ title: 'Overview' }} />
        <Stack.Screen name="details/page" options={{ title: 'Details' }} />
        <Stack.Screen name="saver/page" options={{ title: 'Saver' }} />
        <Stack.Screen name="category/page" options={{ title: 'Category' }} />
        <Stack.Screen name="expenses/page" options={{ title: 'Category' }} />
      </Stack>
    </TamaguiProvider>
  );
}
