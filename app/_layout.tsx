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
        <Stack.Screen name="index" />
        <Stack.Screen name="details/page" />
        <Stack.Screen name="saver/page" />
        <Stack.Screen name="category/page" />
        <Stack.Screen name="expenses/page" />
        <Stack.Screen name="proposal/page" />
      </Stack>
    </TamaguiProvider>
  );
}
