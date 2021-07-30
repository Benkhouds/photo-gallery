import { useState, useEffect} from 'react';
import {storage, db, timestamp } from '../firebase/config'

export default function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [url , setUrl]= useState('')
    const [error , setError] = useState('')
    useEffect(()=>{
       
        const storageRef = storage.ref()
        const collectionRef = db.collection('images')
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).on('state_changed', (snapshot)=>{
            let percentage =(snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;     
            switch(snapshot.state){
                case 'paused' :
                    console.log('upload is paused');
                    break;
                case 'running' :
                    console.log('upload is running: '+percentage+'%');
                    break;
                default:
                    break;
            }
            setProgress(percentage)
        },
        (err) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            setError(err)
           /*  switch (error.code) {
              case 'storage/unauthorized':
                console.log('User doesnt have permission to access the object');
                break;
              case 'storage/canceled':
                console.log('user canceled the upload');
                break;
              case 'storage/unknown':
                console.log('Unknown error occurred, inspect error.serverResponse')
                break;
              default:
                  console.log(error.serverResponse)
            } */
        },        
        ()=>{
           // Handle successful uploads on complete
            // get the download URL
            fileRef.getDownloadURL().then((downloadURL)=>{
                
                const createdAt= timestamp()
                collectionRef.add({
                    url : downloadURL,
                    createdAt
                })
                .then((docRef)=>{
                    console.log('id: ',docRef.id);
                    setUrl(downloadURL)
                })
                .catch(err=>setError(err))
                
            })

        }
        
        )
    },[file])
    return {progress, url, error}
}
