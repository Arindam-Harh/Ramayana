import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loader } from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
