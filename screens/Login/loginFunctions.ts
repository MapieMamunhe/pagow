import { auth } from "../../firebase";

export default async function login(email: string, password: string) {
  auth
    .signInWithEmailAndPassword(auth.getAuth(), email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logado com " + user.email);
    })
    .catch((err) => alert(err.message));
  //console.log(cell, password);
}
function dados() {
  return "ALgum dado";
}
