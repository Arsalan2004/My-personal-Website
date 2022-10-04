import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Services() {
  return (
    <div>
      <h1>NO SERVICES AVAILABLE..</h1>
      <p className="greet">Contact Me For Any Question</p>
      <NavLink exact="true" to="/contact" end>
        <Button variant="contained" color="error">
          Contact
        </Button>
      </NavLink>
    </div>
  );
}
