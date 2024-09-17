
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function VideoCallScreen({ onEndCall, onToggleMute, isMuted }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.video} />
      <View style={styles.controls}>
        <TouchableOpacity onPress={onToggleMute} style={styles.muteButton}>
          <Text>{isMuted ? 'Unmute' : 'Mute'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEndCall} style={styles.endButton}>
          <Text>End Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    backgroundColor: '#ccc',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
  },
  muteButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#6da66f',
    borderRadius: 5,
  },
  endButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#ff9999',
    borderRadius: 5,
  },
});
