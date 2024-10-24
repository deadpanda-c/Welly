import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';

export default function HomeScreen() {
  return (
    <ThemedView style={pageStyle.container}>
      <ThemedText type='defaultSemiBold'>Home Page</ThemedText>
    </ThemedView>
  );
}
