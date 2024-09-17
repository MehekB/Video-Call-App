import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import VideoCallScreen from './components/VideoCallScreen';
import TranscriptDisplay from './components/TranscriptDisplay';

export default function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [transcript, setTranscript] = useState('Waiting for transcript...');

  const handleJoinCall = () => {
    setCallActive(true);
    simulateTranscript();
  };

  const handleEndCall = () => {
    setCallActive(false);
    setTranscript('Call ended.');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const simulateTranscript = () => {
    setTimeout(() => setTranscript('This is a simulated transcript.'), 2000);
    setTimeout(() => setTranscript('The call is ongoing...'), 5000);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {callActive ? (
        <>
          <VideoCallScreen
            onEndCall={handleEndCall}
            onToggleMute={toggleMute}
            isMuted={isMuted}
          />
          <TranscriptDisplay transcript={transcript} />
        </>
      ) : (
        <TouchableOpacity onPress={handleJoinCall} style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Call</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
