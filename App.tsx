import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./screens/Register";
import { RootStackParamList } from "./types";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
