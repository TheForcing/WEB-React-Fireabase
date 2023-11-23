import { useState } from "react";
import styles from "/src/styles/Create-account.module.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/router";



export default function CreateAccount () {
  const router = useRouter()
  const [ isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  
  

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {

    e.preventDefault();
    setError("");
    if( isLoading || name === "" || password === "" || email === "") return;
    try{
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
           auth,
           email,
           password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: name,
      });
      router.push("/");
    }catch(e){
      if(e instanceof FirebaseError){
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  
  }
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
    <div className={styles.div}>
      <input
     className={styles.input}
       onChange={onChange}
       name="name"
       value={name}
       placeholder="Name"
       type="name"
       required
    / >
     <input
     className={styles.input}
       onChange={onChange}
       name="email"
       value={email}
       placeholder="Email"
       type="email"
       required
    / >
     <input
     className={styles.input}
     onChange={onChange}
     value={password}
     name="password"
     placeholder="Password"
     type="password"
     required
     />
   <input
    className={styles.input}
    type="submit"
    value={isLoading ? "Loading..." : "Create Account"}
    />
    </div>
    </form>

  )
  
}