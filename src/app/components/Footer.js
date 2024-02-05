import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-40 py-10  footer-wrapper">
      <div>
        <p className="phone-number">
          {" "}
          Questions? Call <a href="tel:0008009191694"> 000-800-919-1694</a>
        </p>
        <ul className="flex flex-wrap footer-items">
          <li>FAQ</li>
          <li> Help Centre </li>
          <li> Terms of Use </li>
          <li> Privacy </li>
          <li>Cookie Preference </li>
          <li> Corporate Information </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
