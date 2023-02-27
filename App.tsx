import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./screens/Register";
import { RootStackParamList } from "./generalTypes";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import VerContractos from "./screens/VerContractos";
import PedirContractos from "./screens/PedirContractos";
import {Image, StyleSheet} from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import {IconProps} from "@expo/vector-icons/build/createIconSet";
const bgImage = require ("./assets/images/background-header.jpg");

const queryClient = new QueryClient();

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const MainStack = createBottomTabNavigator();
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
const tabNavigationOptions = (icon:unknown)=>{
    return {
        headerShown: true,
        headerStyle: {
            backgroundColor:"green",
            borderBottomRightRadius:30,
            borderBottomLeftRadius:30,
        },
        headerBackgroundContainerStyle:{
            height:"150%",
        },
        headerTitleStyle:{
            fontSize:20,
        },
    } as  BottomTabNavigationOptions;
}
const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={"Home"}>
      <MainStack.Screen
          options={()=> {
              return {
                  ...tabNavigationOptions("Home"),
                  tabBarIcon:(
                  ({size, color, focused})=> <Ionicons name={"ios-home"} size={20} color={focused ? "green" :"black"} />
              )

          }
          }}

          name="Home" component={Home}
      />
        <MainStack.Screen
            name={"Visualizar contractos"}
            component={VerContractos}
            options={()=> {
                return {
                    ...tabNavigationOptions("Home"),
                    tabBarIcon:(
                        ({size, color, focused})=> <FontAwesome name={"handshake-o"} size={20} color={focused ? "green" :"black"} />
                    )

                }
            }}
        /><MainStack.Screen
            name={"Pedir Contracto"}
            component={PedirContractos}
            options={()=> {
                return {
                    ...tabNavigationOptions("Home"),
                    tabBarIcon:(
                        ({size, color, focused})=> <FontAwesome5  name={"hand-holding-usd"} size={20} color={focused ? "green" :"black"} />
                    )

                }
            }}
        />
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
