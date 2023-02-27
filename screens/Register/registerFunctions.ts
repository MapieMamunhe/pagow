import { auth } from "../../firebase";
import {BACKEND_URL_LOCAL } from "../../env";
import { userDataType, apiResponseType } from "../../generalTypes";
import axios from "axios";
const handleSignUp = async (userData:userDataType) => {
    let registerSuccess:boolean = await signUpFirebase(userData.email, userData.password as string);

    const {message, success} = await saveUserPaGow(userData);
    if(!success){
        alert(`O cadastro não foi concluido, ${message}`);
    }

    if (registerSuccess){
        alert("Cadastrado com sucesso!");
        return;
    }
};
const signUpFirebase =async (email: string, senha: string)=>{
    const credentials = await auth
        .createUserWithEmailAndPassword(auth.getAuth(), email, senha)
        .then((userCredentials) => userCredentials.user)
        .catch((err) => alert(err.message));
    if(credentials){
        return true;
    }
    return false;
}

const saveUserPaGow = async (userData: userDataType) => {
    const {firstName,
        lastName,
        cellphone,
        email} = userData;
    const { data }:{data:apiResponseType}= await axios.post(`${BACKEND_URL_LOCAL}/user`, {
        firstName: firstName,
        lastName: lastName,
        cellphone: cellphone,
        email: email,
    });
    return data;
};

export { saveUserPaGow };

export default handleSignUp;
