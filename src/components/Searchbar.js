import React from "react";

function Searchbar({address, getdata}) {
  return (
    <>
      <div className="query">
        <label>Enter your Address</label>
        <input type="text" onChange={address}></input>
        <button onClick={getdata}>Submit</button>
      </div>
    </>
  );
}

export default Searchbar;
