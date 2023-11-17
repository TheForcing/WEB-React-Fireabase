import { useState } from "react";
import styles from "/src/styles/Create-account.module.css"


export default function CreateAccount () {
  const [ isLoading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   
  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setError("");
    if( isLoading || name === "" || password === "" || email === "") return;

      
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