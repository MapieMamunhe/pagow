import React from "react";
import { Button, View } from "react-native";
import InputField from "../../components/InputField";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <InputField placeHolderText="Telefone" entryValue="numeric" />
      <InputField placeHolderText="Senha" />
      <Button title="Login" onPress={() => console.log("Ola")} />
    </View>
  );
};

export default Login;
