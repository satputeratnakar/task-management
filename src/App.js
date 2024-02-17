import React from "react";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import { TaskManagementContextProvider } from "./utils/taskManagement";
import "./styles/global.scss";

export default function App() {
  return (
    <TaskManagementContextProvider>
      <div
        style={{
          backgroundColor: "rgb(150, 0, 255)",
          backgroundSize: "cover",
        }}
      >
        <Topbar />
        <Home />
      </div>
    </TaskManagementContextProvider>
  );
}
