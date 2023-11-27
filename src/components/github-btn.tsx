import { GithubAuthProvider,  signInWithPopup } from "firebase/auth";
import router from "next/router";
import { auth } from "../../firebase";
import Image from "next/image";
import styles from "../../src/styles/Button.module.css"

export default function GithubButton () {

    const onClick = async ()=>{
        try{
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            router.push("/");

        } catch(error){
            console.log(error);
        }
    };
    return(
        <div className={styles.div}>
        <button className={styles.button} onClick={onClick}>
        Continue with github
        </button>
        <Image src="/github-mark.svg" alt={"깃허브 이미지"} width={50} height={50}/>
        </div>
    )
}