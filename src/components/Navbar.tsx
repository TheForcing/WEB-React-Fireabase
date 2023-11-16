import Link from "next/link";

export default function Navbar (){
    return (
        <div>
    <Link href="/">
       home
      </Link>
      <Link href="/create-account">
      계정 생성
      </Link>
      </div>
    
    )

}