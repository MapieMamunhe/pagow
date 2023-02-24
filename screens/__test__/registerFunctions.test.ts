import { expect, describe, it, jest, test } from "@jest/globals";
import { saveUserPaGow } from "../Register/registerFunctions";
describe("Registar utilizador", () => {
  it("Retorna falso para utilizadores vazios", () => {
    expect(
      saveUserPaGow({
        firstName: "",
        lastName: "",
        cellphone: "",
        email: "",
      })
    ).toBeFalsy();
  });
});
