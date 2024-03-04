import { useState } from "react"
import { useEffect } from "react"

const ArticleComponent = (props) => {
    let content = [{
        name: 'Default Title',
        artist: 'Default Artist name',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat vitae nulla dolorum ab voluptatum vel, animi natus magni eius rem ad, dolore delectus reiciendis quam cum maxime voluptas. Reiciendis saepe alias suscipit libero, esse doloribus aliquam eum, dolor distinctio harum tempore tenetur sed rerum odit itaque excepturi nesciunt minus magni illum architecto soluta! Quidem molestias quibusdam provident doloremque! Tempore perspiciatis maxime magni maiores, ipsam impedit illum fugiat dolorum laboriosam amet ex doloremque corrupti modi esse distinctio nostrum voluptate quos architecto eligendi quia blanditiis rerum nemo! Voluptates sunt laboriosam provident ad tenetur minima possimus, laborum quasi error tempore, accusamus harum nobis quae recusandae odio esse? Magnam recusandae, beatae sit vitae esse amet odio eaque eos, ut distinctio delectus veritatis culpa, fugiat aut totam in labore earum quos ratione at tempora perferendis alias! Vero officia error voluptate porro aspernatur, odio eveniet consequuntur fugit harum veniam at quis illo laboriosam consectetur, fugiat praesentium fuga iure nostrum voluptatem minima? Amet corporis ab quo, nisi ratione quibusdam. Veritatis sint nihil ut minima placeat, quas tempora libero a, totam esse numquam cupiditate suscipit deserunt voluptatum ullam laboriosam est, recusandae autem voluptatibus nesciunt reprehenderit? Ipsam amet delectus maxime porro rem placeat expedita doloremque nihil obcaecati voluptas.",
        url: 'https://placehold.co/600x300',
        alt: 'Default Placeholder'
    }]
    if(props.articleList) {
        content = props.articleList
    }

    // console.log(content)
    const [counter, setCounter] = useState(0)
    const [disablePrev, setDisablePrev] = useState(true)
    const [disableNext, setDisableNext] = useState(false)
    let articleNumber = counter + 1

    const nextArticle = () => {
        if(counter < content.length - 1) {
            setCounter(counter + 1)
            setDisableNext(false)
        }
        if(counter + 1 === content.length - 1) {
            setDisableNext(true)
        }
    }
    // console.log(content.length)
    // console.log(content)
    const prevArticle = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        }
        setDisablePrev(counter - 1 === 0);
        setDisableNext(false);
    }

    useEffect(() => {
        setDisablePrev(counter === 0);
    }, [counter]);

    return (
        <div className="col-span-7 text-indigo-900 px-4 py-8">
            <div className="m-8">
                <div className="my-4 text-indigo-400 flex items-center justify-between">
                    <button 
                        onClick={() => prevArticle()} 
                        className={`flex items-center hover:text-indigo-900 ${disablePrev ? 'cursor-not-allowed hover:text-indigo-400' : ''}`}
                        disabled={disablePrev}
                    >
                        <svg className="me-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                        <span>Prev</span>
                    </button>
                    
                    <span>
                        {articleNumber}/{content.length}
                    </span>

                    <button 
                        onClick={() => nextArticle()} 
                        className={`flex items-center hover:text-indigo-900 ${disableNext ? 'cursor-not-allowed hover:text-indigo-400' : ''}`}
                        disabled={disableNext}
                    >
                        <span>Next</span>
                        <svg className="ms-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
                <h2 className="text-3xl">{content[counter].name}</h2>
                <span className="text-sm font-bold">{content[counter].artist}</span>
                <img className="my-8 w-screen" src={content[counter].url} alt={content[counter].alt} />
                <h2 className="mt-8 text-2xl">Some title</h2>
                <p className="my-4">{content[counter].description}</p>
            </div>
        </div>
    )
}

export default ArticleComponent