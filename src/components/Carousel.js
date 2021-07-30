import {useContext} from 'react'
import ImagesContext from '../store/images-context'
import {motion, AnimatePresence} from 'framer-motion'
export default function Carousel({clickedImageIndex,setClickedImageIndex}) {
    const {docs} = useContext(ImagesContext)
    function handleClick(e){
        if(e.target.classList.contains("backdrop")){
            setClickedImageIndex(null)        
        }
    }
    function handleLeftArrow(){
       setClickedImageIndex(clickedImageIndex -1);
    }
    function handleRightArrow(){
      setClickedImageIndex(clickedImageIndex +1);
    }
    return (
        <motion.div layout className="backdrop" onClick={handleClick}
         initial={{opacity:0}}
         animate={{opacity:1}}
        >
            { docs[clickedImageIndex -1] && <i className="fas fa-arrow-circle-left" onClick={handleLeftArrow}></i>}
            <AnimatePresence layout>
                <motion.img src={docs[clickedImageIndex].url} alt="bigger pic"
                key={docs[clickedImageIndex].url}
                initial={{ y: "-100vw" }}
                animate={{y:'0'}}
                />
            </AnimatePresence>
            {docs[clickedImageIndex +1 ] && <motion.i className="fas fa-arrow-circle-right" onClick={handleRightArrow} layout ></motion.i>}
        </motion.div>
    )
}
