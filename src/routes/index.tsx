import { A, Navigate } from "@solidjs/router";

export default function Home() {
  return <Navigate href={() => "/pins"} />;
}
