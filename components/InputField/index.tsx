import React, { SetStateAction, useState } from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";

// import { Container } from './styles';
type propsType = {
  placeHolderText?: String;
  entryValueType?: KeyboardTypeOptions;
  entryValue: string | number;
  hideEntry?: boolean;
};
const InputField: React.FC<propsType> = ({
  placeHolderText = "Campo",
  entryValueType = "default",
  entryValue,
  hideEntry,
}) => {
  const [inputValue, setInputValue] = useState(entryValue);
  return (
    <TextInput
      placeholder={`${placeHolderText}`}
      value={inputValue + ""}
      onChangeText={(text) => {
        setInputValue(text);
      }}
      secureTextEntry={hideEntry}
      style={{
        width: "80%",
        height: 48,
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
