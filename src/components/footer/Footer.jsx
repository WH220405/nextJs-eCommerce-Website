import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 woranan. All rights reserved.</div>
      <div>
        <div className={styles.img}>
          <Image src="/footer.png" width={15} height={15} alt="shopping" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
