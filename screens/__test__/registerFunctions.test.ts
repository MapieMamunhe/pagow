import { expect, describe, it, jest, test } from "@jest/globals";
import { saveUserPaGow } from "../Register/registerFunctions";
import {userDataType} from "../../generalTypes";
describe("Registar utilizador", () => {
  it("Retorna falso para utilizadores vazios", async () => {
    const data = await saveUserPaGow({
      firstName: "",
      lastName: "",
      cellphone: "",
      email: "",
    });
    expect(data?.success).toBeFalsy();
  });
  it("Retorna falso para utilizadores existentes", async () => {
    const uData:userDataType = {
      firstName: "Mapie",
      lastName: "Mamunhe",
      cellphone: "123",
      email: "mmamunhe@gmail.com",
    };
    const data = await saveUserPaGow(uData);
    console.log("Utilizador existe ",  data);
    expect(data?.success).toBeFalsy();
  });
});
