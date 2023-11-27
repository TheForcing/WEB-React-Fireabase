import { signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import { useState } from "react";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import  styles from "../../src/styles/Create-account.module.css"
import GithubButton from "@/components/github-btn";

export default function Login () {
   
   const [ isLoading, setLoading] = useState(false);
   const [ email, setEmail ] = useState("");
   const [ password, setPassword] = useState("");
   const [ error, setError] = useState("");

   const onChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value}, 
      } = e;
      if ( name === "email"){
        setEmail(value);
      } else if ( name === "password") {
        setPassword(value);
      }
   };

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email ==="" || password === "") return;
     try{
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/");

     } catch(e){
        if(e instanceof FirebaseError){
            setError(e.message);
        }
     } finally {
        setLoading(false);
     }
   };
   return(
    <div>
       <title className={styles.title}>Log in</title>
    <form className={styles.form} onSubmit={onSubmit}>
        <input
        className={styles.input}
        onChange={onChange}
        name="email"
        value={email}
        placeholder="Email"
        type="email"
        required
        />
        <input
        className={styles.input}    
        onChange={onChange}
        value={password}
        name="password"
        placeholder="Password"
        type="password"
        required
        />
        <input className={styles.login} type="submit" value={isLoading ? "Loading..." : "Log in"} />
    </form>
    { error !== "" ? <h2>{error}</h2>: null}
   
    <GithubButton/>
    </div>
   )
}