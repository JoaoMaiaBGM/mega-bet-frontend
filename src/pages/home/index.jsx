import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { handleBet } from "../../utils/bet.util";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/user.context";

const PackageTier = () => {
  const { bet, setBet } = useContext(ProfileContext);

  return (
    <form
      onSubmit={async (eve) => {
        eve.preventDefault();
        const response = await handleBet();
        if (response?.message == "success") {
          setBet(response.data);
        }
      }}
    >
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: "flex-start",
          md: "space-between",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
        alignItems={{ md: "center" }}
      >
        <Heading
          size={"md"}
          direction={{ base: "column", md: "row" }}
          textAlign={"center"}
        >
          Usuário:
          <Text fontSize={"md"}>{bet.user}</Text>
        </Heading>
        {bet === false ? (
          <Text>Você ainda não gerou os números</Text>
        ) : (
          <List spacing={4} textAlign="center" fontSize={"larger"}>
            {bet.numbers.map((num, id) => (
              <ListItem key={id}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {num}
              </ListItem>
            ))}
          </List>
        )}

        <Heading
          size={"md"}
          direction={{ base: "column", md: "row" }}
          textAlign={"center"}
        >
          Data:
          <Text fontSize={"md"}>{bet.createdAt}</Text>
        </Heading>
        <Button
          size="md"
          color={useColorModeValue("purple.600", "colorTextDark")}
          bgColor={useColorModeValue("gray.300", "gray.300")}
          type={"submit"}
        >
          Gerar
        </Button>
      </Stack>
    </form>
  );
};

export const Home = () => {
  return (
    <>
      <Header></Header>
      <Box py={6} px={5} minH={"md"} maxW={"80vw"} margin={"0 auto"}>
        <Stack spacing={4} width={"100%"} direction={"column"}>
          <Stack
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
            }}
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <Stack
              width={{
                base: "100%",
                md: "40%",
              }}
              textAlign={"center"}
            >
              <Heading size={"lg"}>
                Gere seus números para a{" "}
                <Text color="purple.400">Mega-sena</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "60%",
              }}
            >
              <Text textAlign={"center"}>
                Clique no botão abaixo, 'gerar'. Os números aparecerão na lista.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier />
          <Divider />
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
