import { useState } from "react";
import styles from "/src/styles/Create-account.module.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/router";



export default function CreateAccount () {
  const router = useRouter()
  const [ isLoading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   
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
    <>
    <div className={styles.div}>
    <textarea className={styles.textarea}>아이디를 입력해주세요</textarea>
    <textarea className={styles.textarea}>비밀번호를 입력해주세요</textarea>
    <button className={styles.button} >
   계정 생성
    </button>
    </div>
 
</>
  )
  
}