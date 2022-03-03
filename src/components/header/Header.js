import React from "react";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faIdBadge}
        style={{ color: "white", fontSize: "50px" }}
      />
    </div>
  );
}

export default Header;
