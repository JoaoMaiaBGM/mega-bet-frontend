import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  return (
    <Flex className="logo" justify={{ base: "start", md: "start" }}>
      <Text
        fontSize={"xx-large"}
        textDecorationLine={"overline underline"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"}
        color={"orange.400"}
      >
        Mega Bet
      </Text>
    </Flex>
  );
};

const SocialButton = ({ children, label, href, target }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blue.500",
        color: useColorModeValue("white", "gray.700"),
      }}
      target={target}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      w={"100vw"}
      h={"fit-content"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link onClick={() => navigate("/home")}>Home</Link>
          <Link
            href={"https://portfolio-ecru-one-30.vercel.app/"}
            target={"_blank"}
          >
            About
          </Link>
          <Link
            href={"http://linkedin.com/in/joaocarlosmaia"}
            target={"_blank"}
          >
            Contact
          </Link>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Linkedin"}
              href={"http://linkedin.com/in/joaocarlosmaia"}
              target={"_blank"}
            >
              <FaLinkedin />
            </SocialButton>

            <SocialButton
              label={"Github"}
              href={"http://github.com/JoaoMaiaBGM"}
              target={"_blank"}
            >
              <FaGithub />
            </SocialButton>

            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/maiapemaia/"}
              target={"_blank"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
