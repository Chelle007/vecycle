import { useState } from "react";
import { AppShell } from "@mantine/core";
import { Dashboard } from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <AppShell>
        <Dashboard />
      </AppShell>
    </>
  );
}

export default App;
