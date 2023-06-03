import React from "react";

const Form = ({ children }) => {
  return (
    <div>
      <form onSubmit={children}>
        <input type="text" placeholder="Title" />
        <input type="Number" placeholder="Bid Amount" />
        <input type="text" placeholder="Description" />
        <input type="email" placeholder="Email " />
      </form>
    </div>
  );
};

export default Form;
