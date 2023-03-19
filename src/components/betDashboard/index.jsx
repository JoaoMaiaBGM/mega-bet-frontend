import {
  Button,
  Heading,
  List,
  Divider,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { handleBet } from "../../utils/bet.util";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/user.context";

export const BetsDashboard = () => {
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
      <Divider width={"350px"} margin={"0 auto"} />

      <Flex
        className={"betContainer"}
        w={"350px"}
        h={"350px"}
        m={"2em auto"}
        boxShadow={"dark-lg"}
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.800")}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Flex
          direction={{ base: "column", md: "column" }}
          alignItems={"center"}
        >
          {bet === false ? (
            <Text textAlign={"center"}>Você ainda não gerou os números</Text>
          ) : (
            <>
              <Text>Números:</Text>
              <List
                w={"200px"}
                display={"flex"}
                alignItems={"flex-end"}
                justifyContent={"space-between"}
                spacing={4}
                textAlign="center"
                fontSize={"2xl"}
              >
                {bet.numbers.map((num, id) => (
                  <ListItem key={id}>{num}</ListItem>
                ))}
              </List>
            </>
          )}
        </Flex>

        <Stack
          className="betUserinfo"
          direction={{
            base: "row",
            md: "row",
          }}
          alignItems={{ md: "center" }}
        >
          <Stack
            className="userName"
            p={3}
            py={3}
            justifyContent={{
              base: "flex-start",
              md: "space-between",
            }}
            direction={{
              base: "column",
              md: "column",
            }}
            alignItems={{ md: "center" }}
          >
            <Heading
              size={"md"}
              direction={{ base: "column", md: "column" }}
              textAlign={"center"}
            >
              Usuário
              <Text fontSize={"md"}>{bet.user}</Text>
            </Heading>
          </Stack>

          <Stack
            className="betDate"
            p={3}
            py={3}
            justifyContent={{
              base: "flex-start",
              md: "space-between",
            }}
            direction={{
              base: "column",
              md: "column",
            }}
            alignItems={{ md: "center" }}
          >
            <Heading
              size={"md"}
              direction={{ base: "column", md: "column" }}
              textAlign={"center"}
            >
              Data
              <Text fontSize={"md"}>{bet.createdAt}</Text>
            </Heading>
          </Stack>
        </Stack>

        <Button
          w={"12em"}
          mt={8}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-3px)",
            boxShadow: "lg",
          }}
          type={"submit"}
        >
          Gerar
        </Button>
      </Flex>

      <Divider width={"350px"} margin={"1em auto"} />
    </form>
  );
};
