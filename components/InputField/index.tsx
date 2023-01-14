import React, { SetStateAction, useState } from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";

// import { Container } from './styles';
type propsType = {
  placeHolderText?: String;
  entryValueType?: KeyboardTypeOptions;
  entryValue: string | number;
  hideEntry?: boolean;
  fieldWidth?: number | string;
  fieldHeight?: number;
  fieldBorder?: number;
};
const InputField: React.FC<propsType> = ({
  placeHolderText = "Campo",
  entryValueType = "default",
  entryValue,
  hideEntry,
  fieldWidth = "80%",
  fieldHeight = 48,
  fieldBorder = 25,
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
        width: fieldWidth,
        height: fieldHeight,
        backgroundColor: "#eee",
        borderRadius: fieldBorder,
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
