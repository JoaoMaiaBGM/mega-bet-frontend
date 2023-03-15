import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <Box
      className="headerContainer"
      maxW={"full"}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        className="navContainer"
        w={"90%"}
        m={"0 auto"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          className="logo"
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={100}>
            <Flex
              className="navContainer"
              justify={{ base: "center", md: "start" }}
            >
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink onClick={() => navigate("/home")}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="https://portfolio-ecru-one-30.vercel.app/"
                    target={"_blank"}
                  >
                    About
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="http://linkedin.com/in/joaocarlosmaia"
                    target={"_blank"}
                  >
                    Contact
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
          </Flex>
        </Flex>

        <Stack
          className="navButtons"
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            className="btnSignIn"
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={() => navigate("/login")}
            cursor={"pointer"}
          >
            Sign In
          </Button>

          <Button
            className="btnSignUp"
            as={"a"}
            display={"flex"}
            alignItems={"center"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.600"}
            _hover={{
              bg: "blue.300",
            }}
            onClick={() => navigate("/register")}
            cursor={"pointer"}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
