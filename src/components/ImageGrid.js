import {useContext} from 'react'
import ImagesContext from '../store/images-context'
import { storage, db } from '../firebase/config'
import {motion} from 'framer-motion'
export default function ImageGrid({setClickedImageIndex}) {
   
   const  {docs} = useContext(ImagesContext)
   function deleteHandler(e){
       console.log(e.target.parentElement)
       db.collection('images').doc(e.target.dataset.id).delete().then(() => {
        console.log("Document successfully deleted!");
        const fileRef = storage.refFromURL(e.target.dataset.url);
        fileRef.delete().then(function () {
            console.log("File Deleted")
        }).catch(function (err) {
            console.log(err)
        });
        
    }).catch((err) => {
        console.error("Error removing document: ", err);
    });
   }  
    return (
        <div className="img-grid">
             
              {docs && docs.map((image,index)=>(

                    <motion.div key={image.id} className="img-wrap" 
                      layout
                      whileHover={{opacity:1}}
                    >
                      <motion.img  src={image.url} alt={image.createdAt}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.6}}
                      />
                      <button data-id={image.id} data-url={image.url} onClick={deleteHandler}>
                          Delete Image
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <i className="fas fa-search-plus"  onClick={()=>setClickedImageIndex(index)}></i>
                      
                    </motion.div>
                   )
              )}
          
            
        </div>
    )
}
