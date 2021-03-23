import { Setting } from "../components/pages/Setting";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  { path: "/", exact: true, children: <Home /> },
  { path: "/user_management", exact: false, children: <UserManagement /> },
  { path: "/setting", exact: true, children: <Setting /> }
];
