import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/af/34/95/af3495b8efa1bb2cadd15751ab0f1410.jpg' }}
        style={styles.reactLogo}
      />
      <ThemedText type="title">Welcome!</ThemedText>
      <ThemedText style={styles.welcomeText}>
        Welcome to your new app experience. Get started by editing your files.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'EEECDE', // Replace with your desired background color
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
