import { Outlet } from "react-router-dom";
import { TypedRouter } from "../routes";
import { Header, NavLink } from "@mantine/core";
import { IconHome, IconNews } from "@tabler/icons-react";

export const DefaultLayout = () => {
  return (
    <>
      <Header height={42}>
        <div className="flex">
          <NavLink
            component={TypedRouter.Link}
            to="/"
            label="Home"
            className="w-auto"
            icon={<IconHome className="w-4 h-4" />}
          />
          <NavLink
            component={TypedRouter.Link}
            to="/about"
            label="About"
            className="w-auto"
            icon={<IconNews className="w-4 h-4" />}
          />
        </div>
      </Header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4">&copy; 2023 Joey Nguyen</footer>
    </>
  );
};
