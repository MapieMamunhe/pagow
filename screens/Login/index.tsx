import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import InputField from "../../components/InputField";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../generalTypes";
const placeholder = require("../../assets/images/placeholder.jpg");
import Button from "../../components/Button";
import login from "./loginFunctions";
import { registerStyles } from "../../styles/general";

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //Login fields
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        {/**Mensagem de boas vindas */}
        <View style={{ ...registerStyles.totalCenter }}>
          <Image source={placeholder} style={{ ...registerStyles.logo }} />
          <Text style={{ ...registerStyles.welcomeMessage }}>
            BEM-VINDO!{"\n"} Entre na sua conta.
          </Text>
        </View>
        {/**Formulario de Login */}
        <View style={{ ...registerStyles.inputFieldGroup }}>
          {/**Telefone*/}
          <View
            style={{
              ...registerStyles.inputField,
              ...registerStyles.totalCenter,
            }}
          >
            <InputField
              placeHolderText="Email"
              entryValueType="email-address"
              entryValue={email}
              updateEntryFunction={setEmail}
            />
          </View>
          {/**Senha*/}
          <View
            style={{
              ...registerStyles.inputField,
              ...registerStyles.totalCenter,
            }}
          >
            <InputField
              placeHolderText="Senha"
              entryValue={senha}
              updateEntryFunction={setSenha}
              hideEntry={true}
            />
          </View>
        </View>
        {/**Entrar*/}
        <View style={{ ...registerStyles.totalCenter }}>
          <Button handlePress={() => login(email, senha)} message={"Entrar"} />
        </View>

        {/**Registe-se */}
        <TouchableOpacity
          style={{
            ...registerStyles.totalCenter,
            ...registerStyles.welcomeMessage,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>
            Não tem uma conta?
            <Text style={{ textAlign: "center", color: "#23BC18" }}>
              Registe-se
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
