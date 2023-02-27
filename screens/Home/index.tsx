import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";
import Button from "../../components/Button";
import HomeInfoCard from "../../components/HomeInfoCard";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView>

        <View style={{marginTop:"15%", }}>
            <HomeInfoCard  />
        </View>
      <Button message="sair" handlePress={() => auth.signOut(auth.getAuth())} />
    </SafeAreaView>
  );
};

export default Home;
