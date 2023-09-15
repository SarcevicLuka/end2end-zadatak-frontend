import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFoundPage";
import { AvailableRoutes } from "./AvailableRoutes";
import { RouteVisibility } from "./RouteVisibility";

type RouteInformation = {
  path: string;
  component: () => JSX.Element | null;
  visibility: RouteVisibility;
};

const RouteConfiguration: RouteInformation[] = [
  {
    path: AvailableRoutes.Home,
    component: HomePage,
    visibility: RouteVisibility.Everyone,
  },
  { path: "*", component: NotFound, visibility: RouteVisibility.Everyone },
];

export default RouteConfiguration;
