import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Usuário é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});
