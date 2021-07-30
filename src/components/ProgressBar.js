import {useEffect} from 'react'
import  useStorage  from '../hooks/useStorage'
export default function ProgressBar({file,setFile}) {
    const {progress, url , error} = useStorage(file) 
    useEffect(()=>{
        if(url){
            setFile(null)
        }
      
    },[url,setFile])
    return (
        <>
           {!error ? <div className="progress-bar" style={{width:`${progress}%`}}/>:<div className="error">{error.code}</div>} 
        </>   
         
    )
}
