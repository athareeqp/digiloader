import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Navbar.module.sass";
import { HiHome, HiUserCircle, HiInformationCircle } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/digivice.png" width="30" height="30" alt="Digivice" />
        <h1>DigiLoader</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <HiHome className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <HiInformationCircle className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/aboutMe">
            <HiUserCircle className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
