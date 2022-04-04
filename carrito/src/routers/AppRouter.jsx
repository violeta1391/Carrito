import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserForm } from "../pages/UserForm";
import Home from "../pages/Home";

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userForm" element={<UserForm />}/>
      </Routes>
    </BrowserRouter>
  );
};