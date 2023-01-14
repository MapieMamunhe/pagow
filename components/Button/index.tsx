import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

// import { Container } from './styles';
const styles = StyleSheet.create({
  button: {
    width: 166,
    height: 32,
    backgroundColor: "#23BC18",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultText: {
    color: "#262525",
    fontSize: 20,
    // fontFamily: "Arial" TODO mudar a fonte para roboto
  },
});
type Props = {
  message: string;
  handlePress: VoidFunction;
};
const Button: React.FC<Props> = ({ message, handlePress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button }}
      onPress={() => handlePress()}
    >
      <Text style={{ ...styles.defaultText }}>{message}</Text>
    </TouchableOpacity>
  );
};

export default Button;
