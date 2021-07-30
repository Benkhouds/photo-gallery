import { useState } from 'react'
import ProgressBar from './ProgressBar'
export default function UploadForm() {
    const [file , setFile] = useState(null)
    const [error , setError] = useState('')
    const types = ['image/png' , 'image/jpeg']
    function changeHandler(e){
        const selectedFile = e.target.files[0]
        if(selectedFile && types.includes(selectedFile.type)){   
            setFile(selectedFile)
            setError('')
        }else{
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} accept="image/png, image/jpeg"/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <p>{file.name}</p>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div> 
        </form>
    )
}
