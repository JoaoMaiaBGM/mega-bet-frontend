import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <h2>Here you create your home page</h2>
      <Footer />
    </>
  );
};
