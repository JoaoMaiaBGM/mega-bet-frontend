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
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/user.context";
import { getSpecificUserToken } from "../../utils/user.util";
import { MenuProfile } from "../menuProfile";

export function Header() {
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);

  useEffect(() => {
    async function getProfileToken() {
      const response = await getSpecificUserToken();
      if (response?.message == "success") {
        setProfile(response.data);
      }
    }
    getProfileToken();
  }, []);

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
          justify={{ base: "start", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={100}>
            <Flex className="nav" justify={{ base: "center", md: "start" }}>
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

        {profile.length > 0 ? (
          <MenuProfile />
        ) : (
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
              Login
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
              Cadastrar
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
