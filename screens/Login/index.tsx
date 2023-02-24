import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputField from "../../components/InputField";
import axios from "axios";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../generalTypes";
const placeholder = require("../../assets/images/placeholder.jpg");
import Button from "../../components/Button";
import login from "./loginFunctions";

const styles = StyleSheet.create({
  totalCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: 88,
    borderRadius: 50,
    width: 112,
    height: 104,
  },
  welcomeMessage: {
    marginTop: "2%",
    textAlign: "center",
    fontSize: 20,
  },
  inputFieldGroup: {
    marginVertical: "4%",
  },
  inputField: {
    marginTop: "4%",
  },
  defaultText: {
    color: "#262525",
    fontSize: 20,
    // fontFamily: "Arial" TODO mudar a fonte para roboto
  },
});
type Props = {
  navigation?: unknown;
};
const Login: React.FC<Props> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //Login fields
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ ...styles.fullScreen }}
    >
      {/**Mensagem de boas vindas */}
      <View style={{ ...styles.totalCenter }}>
        <Image source={placeholder} style={{ ...styles.logo }} />
        <Text style={{ ...styles.welcomeMessage }}>
          BEM-VINDO!{"\n"} Entre na sua conta.
        </Text>
      </View>
      {/**Formulario de Login */}
      <View style={{ ...styles.inputFieldGroup }}>
        {/**Telefone*/}
        <View style={{ ...styles.inputField, ...styles.totalCenter }}>
          <InputField
            placeHolderText="Email"
            entryValueType="email-address"
            entryValue={email}
            updateEntryFunction={setEmail}
          />
        </View>
        {/**Senha*/}
        <View style={{ ...styles.inputField, ...styles.totalCenter }}>
          <InputField
            placeHolderText="Senha"
            entryValue={senha}
            updateEntryFunction={setSenha}
            hideEntry={true}
          />
        </View>
      </View>
      {/**Entrar*/}
      <View style={{ ...styles.totalCenter }}>
        <Button handlePress={() => login(email, senha)} message={"Entrar"} />
      </View>

      {/**Registe-se */}
      <TouchableOpacity
        style={{ ...styles.totalCenter, ...styles.welcomeMessage }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>
          Não tem uma conta?
          <Text style={{ textAlign: "center", color: "#23BC18" }}>
            Registe-se
          </Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Login;
