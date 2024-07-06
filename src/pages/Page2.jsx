import React from "react";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => alert("Request sent from Page 2")}>
        Send Request
      </button>
    </div>
  );
};

export default Page2;
