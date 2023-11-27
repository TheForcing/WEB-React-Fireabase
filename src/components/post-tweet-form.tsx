import { useState } from "react";
import { auth, storage } from "../../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function PostTweetForm () {
    const [ isLoading, setLoading] = useState(false);
    const [ tweet, setTweet] = useState("");
    const [ file, setFile] = useState<File| null>(null);
    
    const onChange= (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setTweet(e.target.value);
    };
    const onFileChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {files} = e.target;
        if (files && files.length === 1){
            setFile(files[0]);
        }
    };
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const user = auth.currentUser;
        if ( !user || isLoading || tweet === "" || tweet.length> 100) return;
        try{
            setLoading(true);
            const doc = await addDoc(collection(db, "tweet"),{
               tweet,
               createdAt: Date.now(),
               username: user.displayName ||   "익명",
               userId: user.uid,
            }
            );
            if(file){
                const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`)
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    photo: url,
                });
            }
            setTweet("");
            setFile(null);
        } catch(e){
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    
    
}