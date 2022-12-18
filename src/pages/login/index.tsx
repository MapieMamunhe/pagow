import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Componentente de Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Login;
