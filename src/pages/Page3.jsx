import React from "react";

const Page3 = () => {
  return (
    <div>
      <h1>Page 3</h1>
      <button onClick={() => alert("Request sent from Page 3")}>
        Send Request
      </button>
    </div>
  );
};

export default Page3;
