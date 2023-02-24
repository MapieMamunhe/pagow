import { auth } from "../../firebase";
import { BACKEND_URL } from "../../env";
import { userDataType } from "../../generalTypes";
import axios, { ResponseType } from "axios";
const handleSignUp = (email: string, senha: string) => {
  auth
    .createUserWithEmailAndPassword(auth.getAuth(), email, senha)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch((err) => alert(err.message));
};

const saveUserPaGow = async (userData: userDataType) => {
  const { data } = await axios.post(`${BACKEND_URL}/user`, {
    userData,
  });
  console.log("dados dos utilizadores", data);
};

export { saveUserPaGow };

export default handleSignUp;
