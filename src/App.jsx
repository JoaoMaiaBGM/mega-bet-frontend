import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { Route } from "./routes";
import { ProfileProvider } from "./contexts/user.context";

function App() {
  return (
    <ProfileProvider>
      <RouterProvider router={Route} />;
    </ProfileProvider>
  );
}

export default App;
