import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "@/components/Nav";
import "./app.css";
import { appRoutes } from "./app.routes";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Nav routes={appRoutes} />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
