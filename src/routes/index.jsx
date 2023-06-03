import Index from "../pages";
import Error404 from "../pages/Error404";
import AdminPage from "../pages/admin";
import BidsCreated from "../pages/admin/pages/bidsCreated";
import BidsPlaced from "../pages/admin/pages/bidsPlaced";
import AdminHome from "../pages/admin/pages/home";
import AdminTraining from "../pages/admin/pages/training";
import UsersList from "../pages/admin/pages/users";
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
    path: "/dashboard",
    element: <AdminPage />,
    name: "Dashboard",
  },
  {
    path: "/404",
    element: <Error404 />,
  },

  //ADMIN NAVIGATION
  {
    path: "/admin/bidsPlaced",
    element: <BidsPlaced />,
  },
  {
    path: "/admin/home",
    element: <AdminHome />,
  },
  {
    path: "/admin/training",
    element: <AdminTraining />,
  },
  {
    path: "/admin/usersList",
    element: <UsersList />,
  },
  {
    path: "/admin/bidsCreated",
    element: <BidsCreated />,
  },
];
