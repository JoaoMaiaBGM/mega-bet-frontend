import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { BetsDashboard } from "../../components/betDashboard";
import {
  Box,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <Box
        py={6}
        px={5}
        minH={"md"}
        maxW={"100vw"}
        margin={"0 auto"}
        bg={"facebook.500"}
      >
        <Stack
          className="main"
          spacing={4}
          width={"100%"}
          direction={"column"}
          alignItems={"center"}
        >
          <Stack
            width={"inherit"}
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
            }}
            direction={{
              base: "column",
              md: "column",
            }}
          >
            <Stack
              width={{
                base: "100%",
                md: "40%",
              }}
              textAlign={"center"}
            >
              <Heading size={"lg"} color={"whiteAlpha.800"}>
                Gere seus números para a{" "}
                <Text color="whatsapp.500">Mega-sena</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "60%",
              }}
            >
              <Text textAlign={"center"} fontSize={15} color={"whiteAlpha.800"}>
                Clique no botão abaixo, 'gerar'. Os números aparecerão na lista.
              </Text>
            </Stack>
          </Stack>

          <SimpleGrid
            className="gridContainer"
            maxW={"fit-content"}
            columns={{ base: 1, md: 2 }}
            spacing={5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <BetsDashboard />
            <Flex>
              <Image
                rounded={"md"}
                w={"350px"}
                h={"350px"}
                alt={"Young couple lookin at a notebook, overjoy lottery win. "}
                src={
                  "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/10/05175333/E%CC%81-hoje-Mega-Sena-R-35-milho%CC%83es-saiba-como-multiplicar-as-suas-chances_credito_iStock.jpg"
                }
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
