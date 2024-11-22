import { createAsync, query } from "@solidjs/router";
import { For } from "solid-js";
import { GET } from "../api/pins";

const getPins = query(async () => {
  "use server";
  return GET();
}, "pins");

export default function Pins() {
  const { latest } = createAsync(() => getPins());

  return (
    <ul>
      <For each={latest?.data}>{(pin) => <li>{JSON.stringify(pin)}</li>}</For>
    </ul>
  );
}
