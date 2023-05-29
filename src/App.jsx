import React from "react";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { UserProvider } from "./contexts/usercontext";

const App = () => {
  return (
    <UserProvider>
      <Router>
      <AnimatePresence initial={false}>
        <Routes>
          {routes.map((each) => (
            <Route key={each.path} path={each.path} element={each.element} />
          ))}
        </Routes>
        </AnimatePresence>
      </Router>
    </UserProvider>
  );
};

export default App;
