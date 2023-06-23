import React from "react";

const Footer = () => {
  return (
    <footer
      class="h-20 bg-pink-555 flex flex-col items-center font-semibold"
      style={{ color: "white" }}
    >
      <h3>Contact with me:</h3>
      <button
        type="text"
        block
        style={{
          color: "white",
          "font-family": "Azeret Mono",
          "font-weight": "bold",
        }}
      >
        Email: miriamnavamucino@gmail.com
      </button>
    </footer>
  );
};

export default Footer;
