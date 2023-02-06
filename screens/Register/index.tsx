import React, { memo, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Header from "../../components/Header";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { auth } from "../../firebase";
const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginLeft: 24,
    marginRight: 7,
  },
  form: {
    marginTop: 48,
  },
  spaceFormData: {
    marginBottom: 32,
  },
});

const Register: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //Field area
  const [name, setName] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  console.log("name : ", name);
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(auth.getAuth(), email, senha)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Header />
      </View>
      <View style={styles.form}>
        <Text style={{ marginBottom: 32, fontSize: 30, fontWeight: "bold" }}>
          Registe-se
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 32,
            }}
          >
            <InputField
              fieldWidth={"43.75%"}
              fieldBorder={13}
              entryValue={name}
              updateEntryFunction={setName}
              placeHolderText={"Primeiro Nome"}
            />
            <View style={{ marginRight: 18, backgroundColor: "red" }}></View>
            <InputField
              entryValue={apelido}
              updateEntryFunction={setApelido}
              fieldBorder={13}
              fieldWidth={"43.75%"}
              placeHolderText={"Ultimo Nome"}
            />
          </View>
          <View>
            <View style={{ ...styles.spaceFormData }}>
              <InputField
                fieldBorder={13}
                fieldWidth={"93.75%"}
                entryValue={email}
                updateEntryFunction={setEmail}
                entryValueType={"email-address"}
                placeHolderText={"Email"}
              />
            </View>
            <View style={{ ...styles.spaceFormData }}>
              <InputField
                fieldBorder={13}
                fieldWidth={"93.75%"}
                entryValue={senha}
                updateEntryFunction={setSenha}
                hideEntry={true}
                placeHolderText={"Senha"}
              />
            </View>
            <View style={{ ...styles.spaceFormData }}>
              <InputField
                fieldBorder={13}
                hideEntry={true}
                fieldWidth={"93.75%"}
                entryValue={confirmarSenha}
                updateEntryFunction={setConfirmarSenha}
                placeHolderText={"Confirmar senha"}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button message={"Registar"} handlePress={handleSignUp} />
            </View>
          </View>
          {/**Entre */}

          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              marginTop: 21,
            }}
          >
            <Text>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ textAlign: "center", color: "#23BC18" }}>
                Clique aqui para entrar
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default memo(Register);
