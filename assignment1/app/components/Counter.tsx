"use client"; //this file runs in the browser

import React, { useState } from "react";

//counter page component
function Counter() {
  //useState is used to keep track of the number
  const [count, setCount] = useState(0); //start with 0

  return (
    <div style={{ padding: "10px" }}>
      {/*page title */}
      <h2>Counter Page</h2>

      {/*shows current count */}
      <p>Count: {count}</p>

      {/*button to increase the count by 1 */}
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px" }}
      >
        Increase
      </button>

      {/*button to decrease the count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/*shows a message if count is bigger than 5 */}
      {count > 5 && <p>The count is greater than 5!</p>}

      {/*shows a message if count is less than 0*/}
      {count < 0 && <p>The count is less than 0!</p>}
    </div>
  );
}

export default Counter; // make Counter component available 