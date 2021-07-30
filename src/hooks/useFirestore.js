import {useState , useEffect} from 'react';
import {db} from '../firebase/config'
export default function useFirestore(collection) {
    const [docs, setDocs] = useState([])
    
    useEffect(()=>{
        const collectionRef = db.collection(collection)
        const unsub = collectionRef.orderBy('createdAt', 'desc')
        .onSnapshot((snapshot)=>{
            const documents = []
             snapshot.forEach((doc)=>{
                 documents.push({...doc.data(),id:doc.id})
             })
             setDocs(documents)
        },
        (error)=>{
            console.log(error)
        }
        )
        return ()=>unsub();
    },[collection])
   
    return  {docs} ;
}