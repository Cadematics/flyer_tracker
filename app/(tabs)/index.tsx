import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Camera from 'expo-camera';
import * as Location from 'expo-location';
import { Stack } from 'expo-router';

export default function PermissionTestScreen() {
  const [cameraPermission, setCameraPermission] = useState<string>('checking...');
  const [locationPermission, setLocationPermission] = useState<string>('checking...');

  useEffect(() => {
    (async () => {
      try {
        const { status: camStatus } = await Camera.Camera.requestCameraPermissionsAsync();
        setCameraPermission(camStatus);

        const { status: locStatus } = await Location.requestForegroundPermissionsAsync();
        setLocationPermission(locStatus);
      } catch (err) {
        console.error('Permission error:', err);
        setCameraPermission('error');
        setLocationPermission('error');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Permission Test' }} />
      <Text style={styles.text}>📸 Camera Permission: {cameraPermission}</Text>
      <Text style={styles.text}>📍 Location Permission: {locationPermission}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
