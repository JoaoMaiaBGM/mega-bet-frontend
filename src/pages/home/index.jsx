import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { BetsDashboard } from "../../components/betDashboard";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

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

          <BetsDashboard />
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
