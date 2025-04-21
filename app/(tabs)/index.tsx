import { View, Text, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function CameraScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: "Camera" }} />
      <Text style={{ fontSize: 18, marginBottom: 20 }}>📸 This will be the Camera Screen</Text>
      <Button title="Go to History" onPress={() => router.push('/history')} />
    </View>
  );
}
