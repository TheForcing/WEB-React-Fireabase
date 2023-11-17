import styles from "/src/styles/Create-account.module.css"

export default function CreateAccount () {
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