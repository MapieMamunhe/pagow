import { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type userDataType = {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: string;
};
export { userDataType };
