import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./screens/Register";
import { RootStackParamList } from "./generalTypes";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import { View } from "react-native";

const queryClient = new QueryClient();

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const MainStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
    </AuthStack.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};
export default function App() {
  const [user, setUser] = useState<unknown>(null);

  useEffect(() => {
    const unsubscribe = auth.getAuth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
