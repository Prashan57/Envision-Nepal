import Index from "../pages";
import Error404 from "../pages/Error404";
import AdminPage from "../pages/admin";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import TrainingList from "../pages/traininglist";

export const routes = [
  {
    path: "/",
    element: <Index />,
    name: "Envision Nepal",
  },
  {
    path: "/trainingList",
    element: <TrainingList />,
    name: "trainingList",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/signUp",
    element: <SignUp />,
    name: "SignUp",
  },
  {
    path: "/404",
    element: <Error404 />,
  },
];
