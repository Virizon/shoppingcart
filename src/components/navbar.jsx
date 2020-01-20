import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="home">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   render() {

//   }
// }
// tambahan komen baru
// aku edit navbar ni
//gue tbahin sesuati
//commit di branch navbar
