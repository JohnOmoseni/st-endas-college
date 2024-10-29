import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppRouter from "./AppRouter";

const MainRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRouter;
