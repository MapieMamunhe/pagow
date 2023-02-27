import { StatusBar, StyleSheet } from "react-native";

const formFields = StyleSheet.create({
  pageFullScreen: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    marginLeft: "6%",
    marginRight: "4%",
    marginBottom: "4%",
  },
});
const registerStyles = StyleSheet.create({
  totalCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: "24%",
    borderRadius: 50,
    width: "32%",
    height: 104,
  },
  welcomeMessage: {
    marginTop: "2%",
    textAlign: "center",
    fontSize: 20,
  },
  inputFieldGroup: {
    marginVertical: "4%",
  },
  inputField: {
    marginTop: "4%",
  },
  defaultText: {
    color: "#262525",
    fontSize: 20,
    // fontFamily: "Arial" TODO mudar a fonte para roboto
  },
});
export default formFields;
export { registerStyles };
