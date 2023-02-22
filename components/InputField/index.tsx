import React, { SetStateAction, useState } from "react";
import {
  KeyboardTypeOptions,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";

// import { Container } from './styles';
type propsType = {
  placeHolderText?: String;
  entryValueType?: KeyboardTypeOptions;
  hideEntry?: boolean;
  entryValue: string;
  fieldWidth?: number | string;
  fieldHeight?: number;
  fieldBorder?: number;
  charLength?: number;
  updateEntryFunction: React.Dispatch<string>;
};

const InputField: React.FC<propsType> = ({
  placeHolderText = "Campo",
  entryValueType = "default",
  entryValue,
  updateEntryFunction,
  hideEntry,
  fieldWidth = "80%",
  fieldHeight = 48,
  fieldBorder = 25,
  charLength = 255,
}): JSX.Element => {
  return (
    <>
      <TextInput
        placeholder={`${placeHolderText}`}
        value={entryValue + ``}
        maxLength={charLength}
        onChangeText={(text) => {
          updateEntryFunction(text);
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
    </>
  );
};

export default InputField;
