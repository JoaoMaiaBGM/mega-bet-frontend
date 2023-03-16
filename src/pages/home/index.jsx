import { useNavigate } from "react-router-dom";
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

const options = {
  id: 1,
  numeros: [32, 48, 54, 26, 27, 30],
  usuario: "João",
  criadoEm: "2023-01-15",
};

function handleNumber() {
  options.numeros.map((num) => {
    return num;
  });
}

const PackageTier = ({ options, checked = false }) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
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
        <Text fontSize={"md"}>{options.usuario}</Text>
      </Heading>

      <List spacing={4} textAlign="center" fontSize={"larger"}>
        {options.numeros.map((num, id) => (
          <ListItem key={id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {num}
          </ListItem>
        ))}
      </List>

      <Heading
        size={"md"}
        direction={{ base: "column", md: "row" }}
        textAlign={"center"}
      >
        Data:
        <Text fontSize={"md"}>{options.criadoEm}</Text>
      </Heading>
      <Button
        size="md"
        color={useColorModeValue(colorTextLight, colorTextDark)}
        bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        onClick={() => handleNumber()}
      >
        Gerar
      </Button>
    </Stack>
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
          <PackageTier options={options} />
          <Divider />
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
