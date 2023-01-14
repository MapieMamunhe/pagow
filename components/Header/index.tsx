import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
const placeholder = require("../../assets/images/placeholder.jpg");
const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
    width: 64,
    height: 63,
  },
});
const Header: React.FC = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 9,
        }}
      >
        <Image source={placeholder} style={{ ...styles.logo }} />
        <Text style={{ fontSize: 20, marginLeft: 10 }}>
          <Text style={{ color: "#23BC18" }}>Pa</Text>
          GOW
        </Text>
      </View>
    </View>
  );
};

export default Header;
