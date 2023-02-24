import { Constants } from "expo-constants";
import { Platform } from "react-native";

const localhost = Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

const ENV = {
  dev: {
    apiUrl: "http://" + localhost + "/api/v1",
  },
  prod: {
    apiUrl: "https://api.example.com",
  },
};

export default getEnvVars;
