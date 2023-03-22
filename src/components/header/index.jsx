import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Image,
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
import logo from "../../assets/logo-mega-bet.png";

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
        w={"100%"}
        m={"0 auto"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justifyContent={"space-evenly"}
      >
        <Flex className="logo" justify={{ base: "start", md: "start" }}>
          <Image
            src={logo}
            alt="Mega Bet's logo, with a drawing of a bird and the name of the site"
            w={"150px"}
          />
        </Flex>

        <Flex className="navBtnContainer">
          <Flex display={{ base: "none", md: "flex" }}>
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
