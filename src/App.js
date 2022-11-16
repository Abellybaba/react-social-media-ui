
import Login2 from "./pages/login/Login2";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,

} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import { AuthContext } from "./context/authContext";
import { useContext, useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";
//import { DarkModeContext } from "./context/darkModeContext"

function App() {
  const currentUser = useContext(AuthContext);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ProtectedRoute = ({ children, redirectPath = '/login', }) => {
    if (!currentUser) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  }

  const Layout = () => {
    return (
      <div>
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
        <div className="flex h-screen">
          <LeftBar className="" />
          <div className="" style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
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
      errorElement: <Login2 />,
      children: [
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
      element: <Login2 />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },

  ]);


  return (
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
