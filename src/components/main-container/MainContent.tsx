import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";

const MainContent = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, Component, name, childs }) =>
          childs.length <= 0 ? (
            <Route key={name} path={path} element={<Component />} />
          ) : (
            <Route key={name} path={path} element={<Component />}>
              {childs.map(({ path, Component, name }) => (
                <Route key={name} path={path} element={<Component />} />
              ))}
              <Route index element={<Navigate to={childs[0].path} replace />} />
            </Route>
          )
        )}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
};

export default MainContent;
