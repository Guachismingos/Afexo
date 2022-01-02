import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";

const MainContent = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
};

export default MainContent;
