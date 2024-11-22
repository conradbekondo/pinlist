import { useLocation } from "@solidjs/router";
import { For } from "solid-js";

export interface NavProps {
  routes: { path: string; title: string }[];
}

export default function Nav({ routes }: NavProps) {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <For each={routes}>
          {(route) => (
            <li class={`border-b-2 ${active(route.path)} mx-1.5 sm:mx-6`}>
              <a href={route.path}>{route.title}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
