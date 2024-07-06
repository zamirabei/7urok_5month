import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setRequestSent } from "../store";

const Page1 = () => {
  const dispatch = useDispatch();

  const handleSendRequest = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      });
      dispatch(setRequestSent());
      alert("Request sent successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to send request");
    }
  };

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={handleSendRequest}>Send Request</button>
    </div>
  );
};

export default Page1;
