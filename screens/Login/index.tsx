import React, { useState } from "react";
import { Button, View, Text } from "react-native";
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
const Login: React.FC = () => {
  const [cellNumber, setCellNumber] = useState<number>();
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>BEM-VINDO! Entre na sua conta.</Text>
      <InputField
        placeHolderText="Telefone"
        entryValueType="numeric"
        handleValue={setCellNumber}
        entryValue={cellNumber || ""}
      />
      <InputField
        placeHolderText="Senha"
        handleValue={setPassword}
        entryValue={password}
        hideEntry={true}
      />
      <Button title="Login" onPress={() => teste()} />
      <Text>Não tem uma conta? Resgiste-se</Text>
    </View>
  );
};
export default Login;
