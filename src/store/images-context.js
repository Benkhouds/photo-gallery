import {createContext} from 'react'
import useFirestore from '../hooks/useFirestore'
const ImagesContext = createContext() 
function ImagesContextProvider({children}) {
    const docs = useFirestore('images')
    return (
        <ImagesContext.Provider value={docs}>
            {children}
        </ImagesContext.Provider>
            
    )
}

export {ImagesContextProvider}
export default ImagesContext 