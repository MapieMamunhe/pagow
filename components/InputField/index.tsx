import React, { useState } from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";

// import { Container } from './styles';
type propsType = {
  placeHolderText?: String;
  entryValue?: KeyboardTypeOptions;
};
const InputField: React.FC<propsType> = ({
  placeHolderText = "Campo",
  entryValue = "default",
}) => {
  const [textInputField, setTextInputField] = useState("");
  return (
    <TextInput
      placeholder={`${placeHolderText}`}
      value={textInputField}
      onChangeText={setTextInputField}
      style={{
        width: "80%",
        height: 48,
        marginBottom: 41,
        backgroundColor: "#eee",
        borderRadius: 25,
        borderColor: "#23bc18",
        borderWidth: 2,
        textAlign: "center",
      }}
      keyboardType={entryValue}
    />
  );
};

export default InputField;
