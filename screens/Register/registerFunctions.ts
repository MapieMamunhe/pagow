import { API_URL } from "react-native-dotenv";
import { auth } from "../../firebase";
const handleSignUp = (email, senha) => {
  auth
    .createUserWithEmailAndPassword(auth.getAuth(), email, senha)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch((err) => alert(err.message));
};

const saveUserPaGow = (userData) => {
  fetch(API_URL, {
    method: "POST",
    body: userData,
  });
};

export default handleSignUp;
