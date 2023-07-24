import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { HomeLayout } from "./layouts/home/layout";
import Publications from "./pages/publications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in">
          <Route index element={<Login />} />
        </Route>
        <Route path="/sign-up">
          <Route index element={<Register />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Publications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
