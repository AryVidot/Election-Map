import React from "react";
const Ctnr = (props) => {
  return (
    <div className="app">
      <main>{props.children}</main>
    </div>
  );
};

export default Ctnr;
