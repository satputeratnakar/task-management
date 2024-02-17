import React from "react";
import ListIcon from '@material-ui/icons/List';
import "./styles.scss";

export default function Topbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <ListIcon />
            <h1>Task Management Application</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
