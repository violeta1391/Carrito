import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserForm } from "../Pages/UserForm";
import Home from "../Pages/Home";

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};