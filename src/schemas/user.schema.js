import * as yup from "yup";

export const userRegisterSchema = yup.object().shape({
  username: yup.string().required("Usuário é obrigatório"),
  first_name: yup.string().required("Nome é obrigatório"),
  last_name: yup.string().required("Sobrenome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      "Senha, no mínimo 8 letras, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha não confere")
    .required("Confirme sua senha"),
});
