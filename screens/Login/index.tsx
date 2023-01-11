import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import InputField from "../../components/InputField";
import login from "./loginFunctions";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
async function teste() {
  axios
    .get("http://192.168.43.201:3000/")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(`O erro foi ${err}`));
}
const styles = StyleSheet.create({});
const Login: React.FC = () => {
  console.log("Fui chamado");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Image source={{ uri: "assetsimagessplash.png" }} />
        <Text>BEM-VINDO! Entre na sua conta.</Text>
      </View>
      <InputField
        placeHolderText="Telefone"
        entryValueType="numeric"
        entryValue={""}
      />
      <InputField placeHolderText="Senha" entryValue={""} hideEntry={true} />
      <Button title="Login" onPress={() => teste()} />
      <Text>
        Não tem uma conta?{" "}
        <TouchableOpacity>
          <Text>Registe-se</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
export default Login;
