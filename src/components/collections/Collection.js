import React, { useEffect } from "react";
import "./Collection.css";

function Collection() {
  useEffect = () => {
    var output = document.getElementById("collection-output");
    let outputString;
    for (var i = 0; i < 10; i++) {
      outputString =
        outputString +
        `
            <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        `;
    }
    output.innerHTML = outputString;
  };
  return (
    <>
      <div className="container" id="collection-output">
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
        <div className="grid-element">
          <h2 className="title"></h2>
          <p>From 12343</p>
          <p>32 Begriffe</p>
        </div>
      </div>
    </>
  );
}

export default Collection;
