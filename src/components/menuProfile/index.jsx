import {
  Menu,
  Flex,
  useToast,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/user.context";
import { useContext } from "react";
import { handleLogout } from "../../utils/session.util";

export const MenuProfile = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <Flex
      className="profileAction"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      <Menu>
        <MenuButton
          className="profileLetter"
          w={39}
          h={39}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          bg={"facebook.400"}
          color={"whiteAlpha.900"}
          fontSize={"x-large"}
          textDecoration={"none"}
        >
          <Flex justifyContent={"center"}>{profile[0].username[0]}</Flex>
        </MenuButton>

        <MenuList className="logoutBtnContainer" bg={"pink.200"}>
          <MenuItem
            justifyContent={"center"}
            fontSize={"larger"}
            bg={"pink.200"}
            color={"red"}
            onClick={() => {
              handleLogout();
              toast({
                position: "top",
                title: "Deslogado com sucesso!",
                status: "info",
                duration: 2000,
                isClosable: true,
              });
              setProfile({});
              navigate("/login");
            }}
          >
            Desconectar
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
