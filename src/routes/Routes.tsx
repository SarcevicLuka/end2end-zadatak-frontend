import { Route, Routes as DomRoutes } from "react-router-dom";
import RouteConfiguration from "./RoutesConfiguration";

const Routes = () => {
  return (
    <DomRoutes>
      {RouteConfiguration.map((route) => {
        return (
          <Route
            element={<route.component />}
            key={Math.random()}
            path={route.path}
          />
        );
      })}
    </DomRoutes>
  );
};

export default Routes;
