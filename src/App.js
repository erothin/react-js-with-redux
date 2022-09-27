import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initApp } from "./redux/actions/AppAction";

const AppScreen = React.lazy(() => import("./screens/AppScreen"));
const NotFoundPage = React.lazy(() => import("./screens/NotFoundPage"));

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.app);
  useEffect(() => {
    if (location.pathname !== "/login" && !isLoggedIn) {
      navigate("/login");
    }

  }, [location, isLoggedIn, navigate]);
  return (
    <>
      <Outlet />
    </>
  )
};

const App = () => {
  const dispatch = useDispatch();
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (!init) {
      setInit(true);
      dispatch(initApp());
    }
  }, [dispatch, init]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route exact path="/" element={<AppScreen />} />
          </Route>
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Suspense>
  );
};

export default App;
