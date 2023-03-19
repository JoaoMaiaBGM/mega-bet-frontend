import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsShieldLockFill } from "react-icons/bs";
import { loginSchema } from "../../schemas/session.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../utils/session.util";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <>
      <Header />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.100"}>
        <form
          className="form"
          onSubmit={handleSubmit(async (data) => {
            const response = await loginUser(data);
            if (response?.message == "success") {
              localStorage.setItem("$TOKEN", response.token.access);
              isValid &&
                toast({
                  position: "top",
                  title: "Logado com sucesso!",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              navigate("/home");
            }
            if (response?.message == "error") {
              toast({
                position: "top",
                title: "Email ou senha incorretos.",
                description: "Por favor, revise os dados.",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
            }
          })}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading
                fontSize={"4xl"}
                textAlign={"center"}
                color={"blackAlpha.800"}
              >
                Faça login na sua conta
              </Heading>
              <BsShieldLockFill size={40} color={"black"} />
            </Stack>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Stack className="formLogin" spacing={4}>
                <FormControl id="username" isRequired>
                  <FormLabel>Usuário</FormLabel>
                  <Input
                    placeholder="Digitar usuário"
                    type="text"
                    {...register("username")}
                  />
                  <Text>{errors.username?.message}</Text>
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Digitar senha"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text>{errors.password?.message}</Text>
                </FormControl>

                <Stack spacing={10}>
                  <Stack align={"end"} justify={"space-between"}>
                    <Link color={"gray.500"}>Esqueci minha senha</Link>
                  </Stack>
                  <Button
                    bg={useColorModeValue("blue.600", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      boxShadow: "lg",
                      bg: "blue.400",
                      transition: "0.4s",
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
      <Footer />
    </>
  );
};
