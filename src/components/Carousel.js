import {useContext} from 'react'
import ImagesContext from '../store/images-context'

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
        <div className="backdrop" onClick={handleClick}>
            { docs[clickedImageIndex -1] && <i className="fas fa-arrow-circle-left" onClick={handleLeftArrow}></i>}
            <img src={docs[clickedImageIndex].url} alt="bigger pic"></img>  
            {docs[clickedImageIndex +1 ] && <i className="fas fa-arrow-circle-right" onClick={handleRightArrow}></i>}
        </div>
    )
}
