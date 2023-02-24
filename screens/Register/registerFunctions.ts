import { auth } from "../../firebase";

import { userDataType } from "../../generalTypes";
const handleSignUp = (email: string, senha: string) => {
  auth
    .createUserWithEmailAndPassword(auth.getAuth(), email, senha)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch((err) => alert(err.message));
};

const saveUserPaGow = (userData: userDataType) => {
  // fetch(BACKEND_URL, {
  //   method: "POST",
  //   body: userData,
  // });
  //const API_URL = Constants.manifest?.extra?.apiKey;
};

export { saveUserPaGow };

export default handleSignUp;
