import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
