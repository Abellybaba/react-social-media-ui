
import Login2 from "./pages/login/Login2";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
const currentUser = useContext(AuthContext);
//const currentUser = true;

const ProtectedRoute = ({children, redirectPath = '/login',}) => {
  if (!currentUser) {
    return <Navigate to={redirectPath} replace/>;
  }
  return children;
}

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div className="flex h-screen">
          <LeftBar className=""/>
          <div className="" style={{ flex: 6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout />
        </ProtectedRoute>),
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login2/>,
    },
    {
      path: "/register",
      element: <Register />,
    },
  
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
