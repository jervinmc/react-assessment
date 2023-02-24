import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Main from "./pages/app/Main";
import AdminDashboard from "./pages/admin/home";
import ClientDashboard from "./pages/client/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  // alert(window.location.pathname)
  switch (window.location.pathname) {
    case "/admin/transaction":
      Component = <Main />;
      break;
    case "/login":
      Component = <Login />;
      break;
    case "/register":
      Component = <Register />;
      break;
    case "/admin/dashboard":
      Component = <AdminDashboard />;
      break;
    case "/client/dashboard":
      Component = <ClientDashboard />;
      break;
    default:
      Component = <Main />;
  }
  return <div>{Component}</div>;
}

export default App;
