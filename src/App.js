import {useState} from 'react'
import { ImagesContextProvider } from './store/images-context';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Carousel from './components/Carousel';
function App() {
  const [clickedImageIndex, setClickedImageIndex] = useState(null)
  return (
    <ImagesContextProvider>
      <div className="App"> 
        <Title/>
        <UploadForm/>
        <ImageGrid setClickedImageIndex={setClickedImageIndex}/>
        {clickedImageIndex !== null && <Carousel clickedImageIndex={clickedImageIndex} setClickedImageIndex={setClickedImageIndex}/>}
      </div>
    </ImagesContextProvider>
  );
}

export default App;