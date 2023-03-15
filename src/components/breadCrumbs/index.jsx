import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function NavBar() {
  const navigate = useNavigate();

  <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
    <BreadcrumbItem>
      <BreadcrumbLink onClick={() => navigate("/home")}>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink
        href="https://portfolio-ecru-one-30.vercel.app/"
        target={"_blank"}
      >
        About
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink
        href="http://linkedin.com/in/joaocarlosmaia"
        target={"_blank"}
      >
        Contact
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>;
}
