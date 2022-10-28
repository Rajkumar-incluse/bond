import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))
const Home = lazy(() => import("./comp/Home"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-pass" element={<ForgetPass />} />
      </Routes>
    </Suspense>
  )
}

export default App;
