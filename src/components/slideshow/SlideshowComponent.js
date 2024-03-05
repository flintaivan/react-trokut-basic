import { useState } from "react"
import { slidesList } from "./slideshowData"

const SlideshowComponent = () => {

    // console.log("Slides length => ", slidesList.length)
    const [slide, setSlide] = useState(0)
    
    // console.log("Slides length => ", slide)
    const nextSlide = () => {
        if(slide < slidesList.length - 1) {
            setSlide(slide + 1)
        }
    }
    const prevSlide = () => {
        if(slide > 0) {
            setSlide(slide - 1)
        }
    }
    const slideCount = slide + 1

    return (
        <div className="h-[1000px]">
            <div className="container mx-auto my-20 max-w-screen-xl h-96 relative">
                <div className="absolute top-5 left-5 ">
                    <span className="text-2xl text-white">{slideCount} / {slidesList.length}</span>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <button onClick={() => nextSlide()}>
                        <svg className="w-12 h-12 fill-gray-200 opacity-80 bg-gray-50 bg-opacity-50 transition-all duration-100 ease-linear hover:bg-gray-700 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                    <button onClick={() => prevSlide()}>
                        <svg className="w-12 h-12 fill-gray-200 opacity-80 bg-gray-50 bg-opacity-50 transition-all duration-100 ease-linear hover:bg-gray-700 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg> 
                    </button>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <span className="text-xl text-white">
                        {slidesList[slide].name}
                    </span>
                </div>
                <img className="w-full" src={slidesList[slide].url} alt={slidesList[slide].alt} />
            </div>
            <div className="flex items-center justify-center space-x-2">
                {
                    slidesList.map((item, index) => 
                        <button 
                            key={index}
                            className={`w-4 h-4 rounded-full bg-gray-300 ${index === slide && 'bg-gray-500 focus:outline-none'}`}
                        >   
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default SlideshowComponent
// hover:bg-gray-500 focus:outline-none