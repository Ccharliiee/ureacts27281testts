import { useState } from "react";

export default function HelloWorld() {
  const [hwPtoggle, setHwPtoggle] = useState(false);
  return (
    <>
      <h1>Hello World!</h1>
      <p>
        Jest is a Node-based runner.
        {hwPtoggle
          ? "This lets us enable fast iteration speed and prevent flakiness."
          : "This means that the tests always run in a Node environment and not in a real browser."}
      </p>
      <button onClick={() => setHwPtoggle(true)}>Toggle text</button>
    </>
  );
}
