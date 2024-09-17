import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TranscriptDisplay({ transcript }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transcript:</Text>
      <Text style={styles.transcript}>{transcript}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  transcript: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
