import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { Users } from "../../pages/Dashboard/Users";
import { Schedules } from "../../pages/Dashboard/Schedules";
import { Book } from "../../pages/Dashboard/Book";
import { Account } from "../../pages/Dashboard/Account";
import { CreateAccount } from "../../pages/CreateAccount";
import { ErrorPage } from "../../pages/ErrorPage";
import { useQueryUserPermission } from "../../queries/useQueryUserPermission";
import { AuthorizeRoute } from "./AuthorizeRoute";

export const AppRoutes = () => {
  const { data, isLoading } = useQueryUserPermission();

  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<CreateAccount />} />

            <Route
              path="dashboard"
              element={
                <AuthorizeRoute allowed={data}>
                  <Dashboard user={data.userId} />
                </AuthorizeRoute>
              }
            >
              <Route path="users" element={<Users />} />
              <Route path="schedules" element={<Schedules />} />
              <Route path="book" element={<Book />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};
