import React, { SetStateAction, useState } from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";

// import { Container } from './styles';
type propsType = {
  placeHolderText?: String;
  entryValueType?: KeyboardTypeOptions;
  handleValue: any;
  entryValue: string | number;
  hideEntry?: boolean;
};
const InputField: React.FC<propsType> = ({
  placeHolderText = "Campo",
  entryValueType = "default",
  handleValue,
  entryValue,
  hideEntry,
}) => {
  return (
    <TextInput
      placeholder={`${placeHolderText}`}
      value={entryValue + ""}
      onChangeText={(text) => {
        handleValue(text);
      }}
      secureTextEntry={hideEntry}
      style={{
        width: "80%",
        height: 48,
        marginBottom: 41,
        backgroundColor: "#eee",
        borderRadius: 25,
        borderColor: "#23bc18",
        borderWidth: 2,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#6b6565",
      }}
      keyboardType={entryValueType}
    />
  );
};

export default InputField;
