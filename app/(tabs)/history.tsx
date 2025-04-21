import { View, Text, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function HistoryScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: "History" }} />
      <Text style={{ fontSize: 18, marginBottom: 20 }}>🕒 This will be the History Screen</Text>
      <Button title="Back to Camera" onPress={() => router.push('/')} />
    </View>
  );
}
