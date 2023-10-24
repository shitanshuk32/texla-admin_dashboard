import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Companies from "./pages/companies/Companies";
import Support from "./pages/support/Support";
import UserAdmin from "./pages/userAdmin/UserAdmin";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import "./styles/Global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "userAdmin",
          element: <UserAdmin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
