import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
