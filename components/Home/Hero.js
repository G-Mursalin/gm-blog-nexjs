import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/my.jpg"
          alt="An image showing Mursalin"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mursalin</h1>
      <p>
        I blog about web development - especially frontend like HTML, CSS,
        JavaScript, React.
      </p>
    </section>
  );
};

export default Hero;
