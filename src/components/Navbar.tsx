import Link from "next/link";
import styles from "/src/styles/Navbar.module.css"
import { useRouter } from "next/router";

export default function Navbar (){
    const router = useRouter();
    return (
        <>
       <nav className={styles.nav}>
       <Link href="/" legacyBehavior>
       <a className={`${styles.active} ,{router.pathname === "/" ? "active" : ""}`}>home</a>
      </Link>
      <Link href="/create-account" legacyBehavior>
      <a className={`${styles.active} ,{router.pathname === "/create-account" ? "active" : ""}`}>계정생성</a>
      </Link>
      </nav>
      </>
    )

}