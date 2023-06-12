import Index from "../pages";
import Error404 from "../pages/Error404";
import BidsCreated from "../pages/admin/pages/bidsCreated";
import BidsPlaced from "../pages/admin/pages/bidsPlaced";
import AdminHome from "../pages/admin/pages/home";
import AdminTraining from "../pages/admin/pages/training";
import UsersList from "../pages/admin/pages/users";
import AdminBidPostsView from "../pages/admin/pages/views/bidsView";
import UserBidsView from "../pages/admin/pages/views/userBidsView";
import UsersView from "../pages/admin/pages/views/usersView";
import AdminPage from "../pages/admin";
import Bid from "../pages/bid";
import ForgotPassword from "../pages/forgotpassword";
import Login from "../pages/login";
import ResetPassword from "../pages/resetPassword";
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
    name: "Trainings",
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
    element: <AdminHome />,
    name: "Dashboard",
  },
  {
    path: "/bid",
    element: <Bid />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetPassword/:id",
    element: <ResetPassword />,
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
  {
    path: "/admin/userDetail/:id",
    element: <UsersView />,
  },
  {
    path: "/admin/postDetail/:id",
    element: <AdminBidPostsView />,
  },
  {
    path: "/admin/postDetail/:id/edit",
    element: <AdminBidPostsView />,
  },
  {
    path: "/admin/userBidPosts/:id",
    element: <UserBidsView />,
  },
];
