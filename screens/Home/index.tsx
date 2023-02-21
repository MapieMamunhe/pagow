import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";
import Button from "../../components/Button";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>Ola Nova tela</Text>
      <Button message="sair" handlePress={() => auth.signOut(auth.getAuth())} />
    </SafeAreaView>
  );
};

export default Home;
