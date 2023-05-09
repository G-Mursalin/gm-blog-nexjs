import React from "react";
import classes from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Max' Next Blog</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
