import { View, Text, TouchableOpacity } from "react-native";

export default function RegistroScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-6 text-blue-600">Registro</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="bg-blue-600 px-8 py-3 rounded-xl"
      >
        <Text className="text-white text-lg">Ir a Login</Text>
      </TouchableOpacity>
    </View>
  );
}
