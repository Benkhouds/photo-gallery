import {useEffect} from 'react'
import  useStorage  from '../hooks/useStorage'
import {motion} from 'framer-motion'
export default function ProgressBar({file,setFile}) {
    const {progress, url , error} = useStorage(file) 
    useEffect(()=>{
        if(url){
            setFile(null)
        }
      
    },[url,setFile])
    return (
        <>
           {!error ? 
                    <motion.div className="progress-bar"
                      initial={{width:0}}
                      animate={{width: progress + '%'}}
                    />
                    :
                    <div className="error">{error.code}</div>} 
        </>   
         
    )
}
