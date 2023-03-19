import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "../../schemas/user.schema";
import { userRegister } from "../../utils/user.util";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: yupResolver(userRegisterSchema) });

  return (
    <>
      <Header />
      <Flex minH={"100vh"} align={"start"} justify={"center"} bg={"gray.100"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <form
            className="registerForm"
            onSubmit={handleSubmit(async (data) => {
              const response = await userRegister(data);
              if (response?.message == "success") {
                isValid
                  ? toast({
                      position: "top",
                      title: "Cadastro criado com sucesso!",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  : toast({
                      position: "top",
                      title: "Conta não criada",
                      description: "Por favor, revise os dados.",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                navigate("/login");
              }
            })}
          >
            <Stack align={"center"}>
              <Heading
                fontSize={"4xl"}
                textAlign={"center"}
                color={"blackAlpha.800"}
              >
                Cadastro
              </Heading>
            </Stack>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>Usuário</FormLabel>
                    <Input
                      type={"text"}
                      placeholder={"Nome de usuário"}
                      {...register("username")}
                    ></Input>
                    <Text>{errors.username?.message}</Text>
                  </FormControl>
                </Box>

                <HStack>
                  <Box>
                    <FormControl id="first_name" isRequired>
                      <FormLabel>Nome</FormLabel>
                      <Input
                        type="text"
                        placeholder="Digitar nome"
                        {...register("first_name")}
                      />
                      <Text>{errors.first_name?.message}</Text>
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="last_name" isRequired>
                      <FormLabel>Sobrenome</FormLabel>
                      <Input
                        type="text"
                        placeholder="Sobrenome"
                        {...register("last_name")}
                      />
                      <Text>{errors.last_name?.message}</Text>
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Digitar email"
                    {...register("email")}
                  />
                  <Text>{errors.email?.message}</Text>
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Digitar senha"
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

                <FormControl id="confirmPassword" isRequired>
                  <FormLabel>Confirmar senha</FormLabel>
                  <InputGroup>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Digitar senha"
                      {...register("confirmPassword")}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowConfirmPassword(
                            (showConfirmPassword) => !showConfirmPassword
                          )
                        }
                      >
                        {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text>{errors.confirmPassword?.message}</Text>
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    size="lg"
                    bg={"blue.600"}
                    color={"white"}
                    _hover={{
                      bg: "blue.400",
                    }}
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};
