import { Menu, Button, Flex, useToast } from "@chakra-ui/react";
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
      display={"flex"}
      direction={"row"}
      justifyContent={"center"}
      variant={"select-type-announcement:enable"}
    >
      <Menu>
        <Button
          width="100px"
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
          pl="22px"
          py="8px"
        >
          Sair
        </Button>
      </Menu>
    </Flex>
  );
};
