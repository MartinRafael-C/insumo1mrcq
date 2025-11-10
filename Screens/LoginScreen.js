import { View, Text, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-6 text-blue-600">Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Registro")}
        className="bg-blue-600 px-8 py-3 rounded-xl"
      >
        <Text className="text-white text-lg">Ir a Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
