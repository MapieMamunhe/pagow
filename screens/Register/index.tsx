import React, { memo, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Header from "../../components/Header";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../generalTypes";
import { auth } from "../../firebase";
import handleSignUp from "./registerFunctions";
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginLeft: "6%",
    marginRight: "4%",
  },
  form: {
    marginTop: "10%",
  },
  spaceFormData: {
    marginBottom: "8%",
  },
});

const Register: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //Field area
  const [name, setName] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.form}>
        <Text style={{ marginBottom: "6%", fontSize: 30, fontWeight: "bold" }}>
          Registe-se
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginBottom: "6%",
          }}
        >
          <InputField
            fieldWidth={"43.75%"}
            fieldBorder={13}
            entryValue={name}
            updateEntryFunction={setName}
            placeHolderText={"Primeiro Nome"}
          />
          {/* Espaco entre os nomes */}
          <View style={{ marginRight: "6%", backgroundColor: "red" }}></View>
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
              entryValue={phoneNumber}
              updateEntryFunction={setPhoneNumber}
              entryValueType={"number-pad"}
              placeHolderText={"Telefone"}
              charLength={9}
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
            <Button
              message={"Registar"}
              handlePress={() => handleSignUp(email, senha)}
            />
          </View>
        </View>
        {/**Entre */}

        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            marginTop: "4%",
          }}
        >
          <Text>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ textAlign: "center", color: "#23BC18" }}>
              Clique aqui para entrar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(Register);
